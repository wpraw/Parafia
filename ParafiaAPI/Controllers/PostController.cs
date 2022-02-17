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
    public class PostController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public PostController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    SELECT PostId, UserId, Title, Contents, DataDodania, Username, Name, Nazwisko FROM  dbo.vPostsUsers ORDER BY DataDodania DESC;";
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
        public JsonResult Post(Post po)
        {
            DateTime time = DateTime.Now;

            string query = $"insert into dbo.Posts(PostId, UserId, Title, Contents, DataDodania, IsDeleted) values ('" + po.PostId.ToString() +
                @"','" + po.UserId.ToString() + @"','" + po.Title + @"','" + po.Contents + @"',CONVERT(DateTime2,'" + time + @"',103),'" + po.IsDeleted + @"');";

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

            return new JsonResult("Added Successfully");
        }

        [HttpDelete("{PostId}")]
        public JsonResult Delete(Guid PostId)
        {
            string query = @"
                    UPDATE dbo.Posts SET IsDeleted='1'
                    where PostId = '" + PostId + @"' 
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