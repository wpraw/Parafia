namespace ParafiaAPI.Models
{
    public class User
    {
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string NumberPhone { get; set; }
        public byte IsDeleted { get; set; }
    }
}
