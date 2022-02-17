using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using ParafiaAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace ParafiaAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]


    public class PriestController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public PriestController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    SELECT PriestId, Degree, Name, Surname FROM dbo.Priests";
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