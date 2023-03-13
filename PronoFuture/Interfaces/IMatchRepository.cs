using PronoFuture.Models;

namespace PronoFuture.Interfaces
{
    public interface IMatchRepository
    {
        ICollection<Match> GetMatches(int championshipId);
    }
}
