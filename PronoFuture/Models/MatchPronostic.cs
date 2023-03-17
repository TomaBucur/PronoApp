namespace PronoFuture.Models
{
    public class MatchPronostic
    {
        public int Id { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int HostTeamGoalsPronostic { get; set; }
        public int GuestTeamGoalsPronostic { get; set; }
        public int GoalsDifferencePronostic { get; set; }
    }
}
