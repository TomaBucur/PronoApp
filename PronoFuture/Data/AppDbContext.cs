using Microsoft.EntityFrameworkCore;
using PronoFuture.Models;


namespace PronoFuture.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :base(options) 
        {
            
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<Championship> Championships { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<PronosticChampionship> PronosticsChampionships { get; set; }
        public DbSet<MatchPronostic> MatchPronostics { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Create Users
            var user1 = new User
            {
                Id = 1,
                Name = "Dan Negru",
                Email = "johndoe@example.com",
                Password = "password1",
                Phone = "555-1234",
                RegistrationDate = DateTime.Now,
                UserRole = EnumUserRole.Player
            };

            var user2 = new User
            {
                Id = 2,
                Name = "Ionut Cusca",
                Email = "janedoe@example.com",
                Password = "password2",
                Phone = "555-5678",
                RegistrationDate = DateTime.Now,
                UserRole = EnumUserRole.Player
            };

            modelBuilder.Entity<User>().HasData(user1, user2);

            // Create Championships
            var championship1 = new Championship
            {
                Id = 1,
                Name = "Premier League",
                ChampionshipStatus = EnumStatus.Ongoing,
                StartingDate = new DateTime(2023, 3, 1),
                EndingDate = new DateTime(2023, 5, 30),
            };

            var championship2 = new Championship
            {
                Id = 2,
                Name = "Bundesliga",
                ChampionshipStatus = EnumStatus.Ongoing,
                StartingDate = new DateTime(2023, 3, 1),
                EndingDate = new DateTime(2023, 5, 30),
            };

            var championship3 = new Championship
            {
                Id = 3,
                Name = "La Liga",
                ChampionshipStatus = EnumStatus.Pending,
                StartingDate = new DateTime(2023, 6, 1),
                EndingDate = new DateTime(2023, 8, 30),
            };

            modelBuilder.Entity<Championship>().HasData(championship1, championship2, championship3);

            // Create Matches
            var random = new Random();
            for (int i = 1; i <= 10; i++)
            {
                int hostTeamGoals = random.Next(0, 6);
                int guestTeamGoals = random.Next(0, 6);

                var match = new Match
                {
                    Id = i,
                    ChampionshipId = championship1.Id,
                    HostTeam = $"Host Team {i}",
                    GuestTeam = $"Guest Team {i}",
                    HostTeamGoals = hostTeamGoals,
                    GuestTeamGoals = guestTeamGoals,
                    StartingDate = championship1.StartingDate.AddDays(i * 2),
                    MatchStatus = championship1.ChampionshipStatus
                };
                match.Winner = match.HostTeamGoals > match.GuestTeamGoals ? match.HostTeam : match.GuestTeam;
                modelBuilder.Entity<Match>().HasData(match);
            }

            // Create MatchPronostics
            for (int i = 1; i <= 10; i++)
            {
                int hostTeamGoalsPronostic1 = random.Next(0, 6);
                int guestTeamGoalsPronostic1 = random.Next(0, 6);
                int hostTeamGoalsPronostic2 = random.Next(0, 6);
                int guestTeamGoalsPronostic2 = random.Next(0, 6);

                var matchPronostic1 = new MatchPronostic
                {
                    Id = i * 2 - 1,
                    MatchId = i,
                    UserId = user1.Id,
                    HostTeamGoalsPronostic = hostTeamGoalsPronostic1,
                    GuestTeamGoalsPronostic = guestTeamGoalsPronostic1,
                    GoalsDifferencePronostic = Math.Abs(hostTeamGoalsPronostic1 - guestTeamGoalsPronostic1)
                };

                var matchPronostic2 = new MatchPronostic
                {
                    Id = i * 2,
                    MatchId = i,
                    UserId = user2.Id,
                    HostTeamGoalsPronostic = hostTeamGoalsPronostic2,
                    GuestTeamGoalsPronostic = guestTeamGoalsPronostic2,
                    GoalsDifferencePronostic = Math.Abs(hostTeamGoalsPronostic2 - guestTeamGoalsPronostic2)
                };

                modelBuilder.Entity<MatchPronostic>().HasData(matchPronostic1, matchPronostic2);
            }

            // Create PronosticChampionships
            var pronosticChampionship1 = new PronosticChampionship
            {
                Id = 1,
                UserId = user1.Id,
                ChampionshipId = championship1.Id,
            };

            var pronosticChampionship2 = new PronosticChampionship
            {
                Id = 2,
                UserId = user2.Id,
                ChampionshipId = championship1.Id,
            };

            modelBuilder.Entity<PronosticChampionship>().HasData(pronosticChampionship1, pronosticChampionship2);
        }
    }
}
