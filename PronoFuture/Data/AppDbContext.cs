using Microsoft.AspNetCore.Identity;
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

      
    }
}
