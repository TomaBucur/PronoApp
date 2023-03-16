using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PronoFuture.Models;

namespace PronoFuture.Data
{
    class Program
    {
        static void Main(string[] args)
        {
            var serviceProvider = new ServiceCollection()
                .AddDbContext<AppDbContext>(options => options.UseSqlServer("YourConnectionString"))
                .BuildServiceProvider();

            using (var context = serviceProvider.GetService<AppDbContext>())
            {
                // Create Users
                var user1 = new User
                {
                    Name = "John Doe",
                    Email = "johndoe@example.com",
                    Password = "password1",
                    Phone = "555-1234",
                    RegistrationDate = DateTime.Now,
                    UserRole = EnumUserRole.Player
                };

                var user2 = new User
                {
                    Name = "Jane Doe",
                    Email = "janedoe@example.com",
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
                context.SaveChanges();
            }
        }
    }
}


