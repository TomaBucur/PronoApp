﻿using System.ComponentModel.DataAnnotations;

namespace PronoFuture.DTOs
{
    public class LoginUserDTO
    {
        [Required]
        [StringLength(50)]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 6)]
        public string Password { get; set; }
    }
}
