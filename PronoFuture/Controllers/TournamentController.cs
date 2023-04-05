using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PronoFuture.Interfaces;
using PronoFuture.Models;

namespace PronoFuture.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class TournamentController : ControllerBase
    {
        private readonly ITournamentRepository _tournamentRepository;

        public TournamentController(ITournamentRepository tournamentRepository)
        {
            _tournamentRepository = tournamentRepository;
        }

        [HttpGet("{id}")]
        public IActionResult GetTournament(int id)
        {
            var tournament = _tournamentRepository.GetTournamentById(id);

            if (tournament == null)
            {
                return NotFound();
            }

            return Ok(tournament);
        }

        [HttpGet("all")]
        public IActionResult GetAllTournaments()
        {
            var tournaments = _tournamentRepository.GetAllTournaments();

            return Ok(tournaments);
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetUserTournaments(int userId)
        {
            var tournaments = _tournamentRepository.GetUserTournaments(userId);

            return Ok(tournaments);
        }

        [HttpPost]
        public IActionResult CreateTournament([FromBody] Tournament tournament)
        {
            if (tournament == null)
            {
                return BadRequest();
            }

            _tournamentRepository.CreateTournament(tournament);

            return CreatedAtAction(nameof(GetTournament), new { id = tournament.Id }, tournament);
        }
    }
}
