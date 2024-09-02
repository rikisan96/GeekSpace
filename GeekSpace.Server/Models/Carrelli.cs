using System;
using System.Collections.Generic;

namespace GeekSpace.Server.Models;

public partial class Carrelli
{
    public int IdCarrello { get; set; }

    public int? IdUser { get; set; }

    public virtual ICollection<ElementiCarrello> ElementiCarrellos { get; set; } = new List<ElementiCarrello>();

    public virtual Utenti? IdUserNavigation { get; set; }

    public virtual ICollection<Vendite> Vendites { get; set; } = new List<Vendite>();
}
