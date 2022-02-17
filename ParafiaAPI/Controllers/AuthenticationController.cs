using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ParafiaAPI.Models;
using System.Data.SqlClient;
using System.Data;


namespace ParafiaAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IJwtAuthenticationManager jwtAuthenticationManager;
        public AuthenticationController(IJwtAuthenticationManager jwtAuthenticationManager, IConfiguration configuration)
        {
            this.jwtAuthenticationManager = jwtAuthenticationManager;
            this._configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Authenticate([FromBody] Authentication user)
        {
            string token_error = "errorLogin";
            var token = jwtAuthenticationManager.Authenticate(user.Username, user.Password);
            if (token == null)
                return Ok(token_error);
            return Ok(token);
        }

        [HttpGet("{username}")]
        public IActionResult Authenticate(string username)
        {
            string query = @"
                    SELECT UserId FROM dbo.Users WHERE Username='" + username + @"'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ParafiaAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
    }
}