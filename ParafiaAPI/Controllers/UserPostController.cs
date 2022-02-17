using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using ParafiaAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace ParafiaAPI.Controllers
{
    [Route("api/[controller]")]

    public class UserPostController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserPostController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    SELECT PostId, UserId, Title, Contents, DataDodania, Username, Name, Nazwisko FROM dbo.vPostsUsers ORDER BY DataDodania DESC; ";
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