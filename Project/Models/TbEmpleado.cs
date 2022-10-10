using System;
using System.Collections.Generic;

namespace Project.Models
{
    public partial class TbEmpleado
    {
        public int Id { get; set; }
        public string Dpi { get; set; } = null!;
        public string NombreC { get; set; } = null!;
        public int? CantidadH { get; set; }
        public double SalarioB { get; set; }
        public string Usuario { get; set; } = null!;
        public string Password { get; set; } = null!;
        public DateTime FechaReg { get; set; }
    }
}
