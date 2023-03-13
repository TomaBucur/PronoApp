namespace PronoFuture.Models
{
    public class Tournament
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime EndingDate { get; set; }
        public EnumTournamentStatus TournamentStatus { get; set; }
        public int ChampionshipId { get; set; }
        public Championship Championship { get; set; }
        public int UserId { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
