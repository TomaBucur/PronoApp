namespace PronoFuture.Models;

public class Achievements
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Url { get; set; }

    public int UserId { get; set; }
    public ICollection<User> Users { get; set; }
}