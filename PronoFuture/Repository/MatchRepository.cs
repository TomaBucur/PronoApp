using PronoFuture.Data;
using PronoFuture.Interfaces;
using PronoFuture.Models;

namespace PronoFuture.Repository
{
    public class MatchRepository : IMatchRepository
    {
        private readonly ApplicationDbContext _context;

        public MatchRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public ICollection<Match> GetMatches(int championshipId)
        {
            return _context.Matches.Where(m => m.ChampionshipId == championshipId)
                                    .OrderBy(m => m.Id)
                                    .ToList();
        }
    }
}
