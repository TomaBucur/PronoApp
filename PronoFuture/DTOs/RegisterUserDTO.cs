using PronoFuture.Models;
using System.ComponentModel.DataAnnotations;

namespace PronoFuture.DTOs
{
    public class RegisterUserDTO
    {
        [Required]
        [StringLength(15)]
        public string UserName { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 6)]
        public string Password { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 6)]
        public string ConfirmPassword { get; set; }
        [Required]
        [StringLength(15)]
        [EmailAddress]
        public string Email { get; set; }

        public string Phone { get; set; }
        public DateTime RegistrationDate { get; set; }

        public EnumUserRole UserRole { get; set; } 
    }
}
