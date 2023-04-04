using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PronoFuture.Models
{
    public class Tournament
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime EndingDate { get; set; }
        public EnumTournamentStatus TournamentStatus { get; set; }
        public EnumChampionshipType ChampionshipType { get; set; }
        [StringLength(10)]
        public string AccessKey { get; set; }
        public bool IsPublic { get; set; }
        public int SignedPlayers { get; set; }
        public float TournamentPrice { get; set; }
        public EnumTournamentPronosticFrequency EnumTournamentPronosticFrequency { get; set; }
        public int ChampionshipId { get; set; }
        public Championship Championship { get; set; }
        public int UserId { get; set; }
        public virtual ICollection<User> Users { get; set; }
        public string HostUserId { get; set; }
        public User HostUser { get; set; }
    }
}
