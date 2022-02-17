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
    [ApiController]
  

     public class UserPriestController : ControllerBase
     {
            private readonly IConfiguration _configuration;

            public UserPriestController(IConfiguration configuration)
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


        [HttpPost]
        public JsonResult Post(Priest p)
        {

            string query = $"insert into dbo.Priests(PriestId, Degree, Name, Surname) values ('" + p.PriestId.ToString() +
                @"','" + p.Degree + @"','" + p.Name + @"','" + p.Surname + @"');";

            try
            {
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
                return new JsonResult("successfullySyntax");
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("UNIQUE KEY"))
                {
                    return new JsonResult("PriestIdFailedSyntax");
                }
                else
                {
                    return new JsonResult("addFailedSyntax");
                }
            }
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(Guid id)
        {
            string query = @"
                   DELETE FROM dbo.Priests 
                    where PriestId = '" + id + @"' 
                    ";
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

            return new JsonResult("Deleted Successfully");
        }

    }
}