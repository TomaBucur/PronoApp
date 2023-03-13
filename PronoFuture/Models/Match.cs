namespace PronoFuture.Models
{
    public class Match
    {
        public int Id { get; set; }
        public int ChampionshipId { get; set; }
        public Championship Championship { get; set; }
        public string HostTeam { get; set; }
        public string GuestTeam { get; set; }
        public int HostTeamGoals { get; set; }
        public int GuestTeamGoals { get; set; }
        public string Winner { get; set; }
        public DateTime StartingDate { get; set; }
        public EnumStatus MatchStatus { get; set; }
    }
}
