namespace PronoFuture.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public string Phone { get; set; }
        public int GoodPronostics { get; set; }
        public int BadPronostics { get; set; }
        public DateTime RegistrationDate { get; set; }
        public EnumUserRole UserRole { get; set; }
        
        public int TournamentId { get; set; }
        public virtual ICollection<Tournament> Tournaments { get; set; }

        public int MatchPronosticId { get; set; }
        public ICollection<MatchPronostic> MatchPronostics { get; set; }
        public int AchievementId { get; set; }
        public ICollection<Achievement> Achievements { get; set; }
        public ICollection<Tournament> HostedTournaments { get; set; }
    }
}
