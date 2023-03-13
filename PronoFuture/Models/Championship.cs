namespace PronoFuture.Models
{
    public class Championship
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public EnumStatus ChampionshipStatus { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime EndingDate { get; set;}
        public List<Match> Matches { get; set; }
    }
}
