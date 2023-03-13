using Microsoft.AspNetCore.Mvc;
using PronoFuture.Interfaces;
using PronoFuture.Models;

namespace PronoFuture.Controllers
{
    public class MatchController : Controller
    {
        private readonly IMatchRepository _matchRepository;

        public MatchController(IMatchRepository matchRepository)
        {
            _matchRepository = matchRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Match>))]
        public IActionResult GetMatches(int championshipId)
        {
            var matches = _matchRepository.GetMatches(championshipId);
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(matches);
        }
    }
}
