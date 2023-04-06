using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PronoFuture.DTOs;
using PronoFuture.Interfaces;

namespace PronoFuture.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private IUserRepository _userRepository;

        public AuthController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        // /api/auth/register   <- ruta
        [HttpPost("Register")]
        public async Task<IActionResult> RegisterAsync([FromBody]RegisterUserDTO model)
        {
            if(ModelState.IsValid)
            {
                var result = await _userRepository.RegisterUserAsync(model);

                if (result.IsSuccess)
                {
                    return Ok(result);
                }
                return BadRequest(result);
            }

            return BadRequest("Some properties are not valid"); //Status code 400
        }

        [HttpPost("Login")]
        public async Task<IActionResult> LoginAsync([FromBody]LoginUserDTO model)
        {
            if(ModelState.IsValid)
            {
                var result = await _userRepository.LoginUserAsync(model);

                if (result.IsSuccess)
                {
                    return Ok(result);
                }
                return BadRequest(result);
            }

            return BadRequest("Some properties are not valid");
        }
    }
}
