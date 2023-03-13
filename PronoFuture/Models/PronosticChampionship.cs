namespace PronoFuture.Models
{
    public class PronosticChampionship
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int UserPoints { get; set; }
        public int ChampionshipId { get; set; }
        public Championship Championship { get; set; }
        public List<MatchPronostic> Pronostics { get; set; }
    }
}
