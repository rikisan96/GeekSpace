using System;
using System.Collections.Generic;

namespace GeekSpace.Server.Models;

public partial class Utenti
{
    public int IdUser { get; set; }

    public string? UserUsername { get; set; }

    public string? UserPassword { get; set; }

    public string? UserEmail { get; set; }

    public string? UserRole { get; set; }

    public virtual ICollection<Carrelli> Carrellis { get; set; } = new List<Carrelli>();
}
