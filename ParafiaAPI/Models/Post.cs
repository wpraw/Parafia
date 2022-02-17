namespace ParafiaAPI.Controllers
{
    public class Post
    {
        public Guid PostId { get; set; }
        public Guid UserId { get; set; }
        public string Title { get; set; }
        public string Contents { get; set; }
        public DateTime DataDodania { get; set; }
        public byte IsDeleted { get; set; }
    }
}
