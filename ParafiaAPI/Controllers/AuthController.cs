using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ParafiaAPI.Models;

namespace ParafiaAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IJwtAuthenticationManager jwtAuthenticationManager;
        public AuthController(IJwtAuthenticationManager jwtAuthenticationManager, IConfiguration configuration)
        {
            this.jwtAuthenticationManager = jwtAuthenticationManager;
            this._configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Authenticate([FromBody] Authentication user)
        {
            string token_error = "notloggedin";
            var token = jwtAuthenticationManager.Authenticate(user.Username, user.Password);
            if (token == null)
                return Ok(token_error);
            return Ok(token);
        }
    }
}