using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PronoFuture.Models;

namespace PronoFuture.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<Achievement> Achievements { get; set; }
        public DbSet<Championship> Championships { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<MatchPronostic> MatchPronostics { get; set; }
        public DbSet<Tournament> Tournaments { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Achievement>()
                .HasMany(a => a.Users)
                .WithMany(u => u.Achievements)
                .UsingEntity<Dictionary<string, object>>(
                    "UserAchievements",
                    j => j.HasOne<User>().WithMany().HasForeignKey("UserId").OnDelete(DeleteBehavior.Restrict),
                    j => j.HasOne<Achievement>().WithMany().HasForeignKey("AchievementId").OnDelete(DeleteBehavior.Restrict));

            modelBuilder.Entity<Championship>()
                .HasMany(c => c.Matches)
                .WithOne(m => m.Championship)
                .HasForeignKey(m => m.ChampionshipId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<MatchPronostic>()
                .HasOne(mp => mp.User)
                .WithMany(u => u.MatchPronostics)
                .HasForeignKey(mp => mp.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<MatchPronostic>()
                .HasOne(mp => mp.Match)
                .WithMany()
                .HasForeignKey(mp => mp.MatchId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Tournament>()
                .HasMany(t => t.Users)
                .WithMany(u => u.Tournaments)
                .UsingEntity<Dictionary<string, object>>(
                    "UserTournaments",
                    j => j.HasOne<User>().WithMany().HasForeignKey("UserId").OnDelete(DeleteBehavior.Restrict),
                    j => j.HasOne<Tournament>().WithMany().HasForeignKey("TournamentId").OnDelete(DeleteBehavior.Restrict));

            modelBuilder.Entity<Tournament>()
                .HasOne(t => t.Championship)
                .WithMany()
                .HasForeignKey(t => t.ChampionshipId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Tournament>()
                .HasOne(t => t.HostUser)
                .WithMany(u => u.HostedTournaments)
                .HasForeignKey(t => t.HostUserId)
                .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(modelBuilder);
        }


    }
}


