using System;
using System.Collections.Generic;

namespace GeekSpace.Server.Models;

public partial class Tipo
{
    public int IdTipo { get; set; }

    public string? TipoNature { get; set; }

    public string? TipoDescription { get; set; }

    public string? TipoPrimaryColour { get; set; }

    public string? TipoSecondaryColour { get; set; }

    public string? TipoDesign { get; set; }

    public virtual ICollection<Prodotti> ProdottiTipoDesignNavigations { get; set; } = new List<Prodotti>();

    public virtual ICollection<Prodotti> ProdottiTipoNatureNavigations { get; set; } = new List<Prodotti>();
}
