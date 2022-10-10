using System;
using System.Collections.Generic;

namespace Project.Models
{
    public partial class TbUser
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
        public DateTime? DateOfBirth { get; set; }
        public string? TokenRecovery { get; set; }
    }
}
