using Microsoft.EntityFrameworkCore;
using PronoFuture.Data;
using PronoFuture.Interfaces;
using PronoFuture.Models;
using System.Collections.Generic;
using System.Linq;

namespace PronoFuture.Repository
{


    public class TournamentRepository : ITournamentRepository
    {
        private readonly AppDbContext _dbContext;

        public TournamentRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Tournament GetTournamentById(int id)
        {
            return _dbContext.Tournaments.FirstOrDefault(t => t.Id == id);
        }

        public IEnumerable<Tournament> GetAllTournaments()
        {
            return _dbContext.Tournaments.ToList();
        }

        public IEnumerable<Tournament> GetUserTournaments(int userId)
        {
            return _dbContext.Tournaments.Where(t => t.UserId == userId).ToList();
        }

        public void CreateTournament(Tournament tournament)
        {
            _dbContext.Tournaments.Add(tournament);
            _dbContext.SaveChanges();
        }

        public void UpdateTournament(Tournament tournament)
        {
            _dbContext.Tournaments.Update(tournament);
            _dbContext.SaveChanges();
        }

        public void DeleteTournament(int id)
        {
            var tournament = _dbContext.Tournaments.FirstOrDefault(t => t.Id == id);

            if (tournament != null)
            {
                _dbContext.Tournaments.Remove(tournament);
                _dbContext.SaveChanges();
            }
        }
    }
}
