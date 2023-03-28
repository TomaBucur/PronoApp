using PronoFuture.Models;

namespace PronoFuture.Interfaces
{
    public interface ITournamentRepository
    {
        Tournament GetTournamentById(int id);
        IEnumerable<Tournament> GetAllTournaments();
        IEnumerable<Tournament> GetUserTournaments(int userId);
        void CreateTournament(Tournament tournament);
    }
}
