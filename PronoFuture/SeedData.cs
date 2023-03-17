using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PronoFuture.Data;
using PronoFuture.Models;

namespace PronoFuture
{
    public class SeedData
    {
        public void Seed()
        {
            var serviceProvider = new ServiceCollection()
                .AddDbContext<AppDbContext>(options => options.UseSqlServer("Data Source=DESKTOP-26MRVED;Initial Catalog=Prono;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False"))
                .BuildServiceProvider();

            using (var context = serviceProvider.GetService<AppDbContext>())
            {
                if (!context.Users.Any() && !context.Championships.Any())
                {
                    // Make sure the db isempty before adding the seed data
                    context.Users.RemoveRange(context.Users);
                    context.Championships.RemoveRange(context.Championships);
                    context.SaveChanges();
                }

                // Create Users
                var user1 = new User
                {
                    Name = "John Lightning",
                    Email = "john.lightning@example.com",
                    Password = "password1",
                    Phone = "555-1234",
                    RegistrationDate = DateTime.Now,
                    UserRole = EnumUserRole.Player
                };

                var user2 = new User
                {
                    Name = "Jane Thunder",
                    Email = "jane.thunder@example.com",
                    Password = "password2",
                    Phone = "555-5678",
                    RegistrationDate = DateTime.Now,
                    UserRole = EnumUserRole.Player
                };

                var championships = new List<Championship>
                {
                    new Championship
                    {
                        Name = "Premier League",
                        ChampionshipStatus = EnumStatus.Ongoing,
                        StartingDate = new DateTime(2023, 3, 1),
                        EndingDate = new DateTime(2023, 5, 30),
                        Matches = new List<Match>()},
                    new Championship
                    {
                        Name = "Bundesliga",
                        ChampionshipStatus = EnumStatus.Ongoing,
                        StartingDate = new DateTime(2023, 3, 1),
                        EndingDate = new DateTime(2023, 5, 30),
                        Matches = new List<Match>()},
                    new Championship
                    {
                        Name = "La Liga",
                        ChampionshipStatus = EnumStatus.Pending,
                        StartingDate = new DateTime(2023, 6, 1),
                        EndingDate = new DateTime(2023, 8, 30),
                        Matches = new List<Match>()},
                };

                var tournaments = new List<Tournament>
                {
                    new Tournament
                    {
                        Name = "The Galactic Cup",
                        StartingDate = new DateTime(2023, 4, 1),
                        EndingDate = new DateTime(2023, 8, 31),
                        TournamentStatus = EnumTournamentStatus.OpenToRegistration,
                        ChampionshipId = championships[0].Id,
                        Users = new List<User> { user1, user2 }
                    },
                    new Tournament
                    {
                        Name = "The Fiery League",
                        StartingDate = new DateTime(2023, 3, 1),
                        EndingDate = new DateTime(2023, 5, 30),
                        TournamentStatus = EnumTournamentStatus.OnGoing,
                        ChampionshipId = championships[1].Id,
                        Users = new List<User> { user1, user2 }
                    },
                    new Tournament
                    {
                        Name = "The Oceanic Clash",
                        StartingDate = new DateTime(2022, 8, 1),
                        EndingDate = new DateTime(2022, 12, 31),
                        TournamentStatus = EnumTournamentStatus.Ended,
                        ChampionshipId = championships[2].Id,
                        Users = new List<User> { user1, user2 }
                    }
                };
                var random = new Random();

                foreach (var championship in championships)
                {
                    int numMatches = championship.ChampionshipStatus == EnumStatus.Pending ? 10 : 20;
                    for (int i = 1; i <= numMatches; i++)
                    {
                        int hostTeamGoals = random.Next(0, 6);
                        int guestTeamGoals = random.Next(0, 6);

                        var match = new Match
                        {
                            ChampionshipId = championship.Id,
                            HostTeam = $"Host Team {i}",
                            GuestTeam = $"Guest Team {i}",
                            HostTeamGoals = hostTeamGoals,
                            GuestTeamGoals = guestTeamGoals,
                            StartingDate = championship.StartingDate.AddDays(i * 2),
                            MatchStatus = championship.ChampionshipStatus
                        };
                        match.Winner = match.HostTeamGoals > match.GuestTeamGoals ? match.HostTeam : match.GuestTeam;

                        var matchPronostic1 = new MatchPronostic
                        {
                            MatchId = match.Id,
                            HostTeamGoalsPronostic = random.Next(0, 6),
                            GuestTeamGoalsPronostic = random.Next(0, 6),
                            GoalsDifferencePronostic = Math.Abs(match.HostTeamGoals - match.GuestTeamGoals)
                        };

                        var matchPronostic2 = new MatchPronostic
                        {
                            MatchId = match.Id,
                            HostTeamGoalsPronostic = random.Next(0, 6),
                            GuestTeamGoalsPronostic = random.Next(0, 6),
                            GoalsDifferencePronostic = Math.Abs(match.HostTeamGoals - match.GuestTeamGoals)
                        };

                        user1.UserPronosticChampionship.Add(new PronosticChampionship
                        {
                            UserId = user1.Id,
                            ChampionshipId = championship.Id,
                            Pronostics = new List<MatchPronostic> { matchPronostic1 }
                        });

                        user2.UserPronosticChampionship.Add(new PronosticChampionship
                        {
                            UserId = user2.Id,
                            ChampionshipId = championship.Id,
                            Pronostics = new List<MatchPronostic> { matchPronostic2 }
                        });

                        championship.Matches.Add(match);
                    }
                }

                // Add the data to the context and save changes
                context.Championships.AddRange(championships);
                context.Users.AddRange(user1, user2);
                context.Tournaments.AddRange(tournaments);
                context.SaveChanges();
            }
        }
    }
}
