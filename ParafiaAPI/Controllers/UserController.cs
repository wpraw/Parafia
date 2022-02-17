using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Authorization;
using ParafiaAPI.Models;

namespace ParafiaAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    SELECT UserId, Username, Name, Surname, NumberPhone, IsDeleted FROM dbo.Users WHERE IsDeleted = '0'";
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
        public JsonResult Post(User us)
        {

            string query = $"insert into dbo.Users(UserId, Username, Password, Name, Surname, NumberPhone, IsDeleted) values ('" + us.UserId.ToString() +
                @"','" + us.Username + @"','" + us.Password + @"','" + us.Name + @"','" + us.Surname + @"','" + us.NumberPhone + @"','0');";

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
                if (ex.Message.Contains("UNIQUE KEY") && ex.Message.Contains(us.NumberPhone))
                {
                    return new JsonResult("usernameFailedSyntax");
                }
                else if (ex.Message.Contains("UNIQUE KEY") && ex.Message.Contains(us.NumberPhone))
                {
                    return new JsonResult("numberphoneFailedSyntax");
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
                    UPDATE dbo.Users SET IsDeleted='1'
                    where UserId = '" + id + @"' 
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