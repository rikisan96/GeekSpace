using System;
using System.Collections.Generic;

namespace GeekSpace.Server.Models;

public partial class Prodotti
{
    public int IdProdotto { get; set; }

    public string? ProdottoName { get; set; }

    public int? TipoNature { get; set; }

    public string? ProdottoPrimaryColour { get; set; }

    public string? ProdottoSecondaryColour { get; set; }

    public int? ProdottoIsRgb { get; set; }

    public decimal? ProdottoPriceUnit { get; set; }

    public string? ProdottoDescription { get; set; }

    public int? ProdottoIsAvaiable { get; set; }

    public int? TipoDesign { get; set; }

    public string? ProdottoBrand { get; set; }

    public string? ProdottoPicture { get; set; }

    public virtual ICollection<ElementiCarrello> ElementiCarrellos { get; set; } = new List<ElementiCarrello>();

    public virtual Tipo? TipoDesignNavigation { get; set; }

    public virtual Tipo? TipoNatureNavigation { get; set; }
}
