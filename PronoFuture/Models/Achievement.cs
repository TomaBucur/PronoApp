namespace PronoFuture.Models;

public class Achievement
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Url { get; set; }
    public ICollection<User> Users { get; set; }
}