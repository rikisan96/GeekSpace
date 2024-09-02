using System;
using System.Collections.Generic;

namespace GeekSpace.Server.Models;

public partial class ElementiCarrello
{
    public int IdElementoCarrello { get; set; }

    public int? IdCarrello { get; set; }

    public int? IdProdotto { get; set; }

    public int? Quantita { get; set; }

    public virtual Carrelli? IdCarrelloNavigation { get; set; }

    public virtual Prodotti? IdProdottoNavigation { get; set; }
}
