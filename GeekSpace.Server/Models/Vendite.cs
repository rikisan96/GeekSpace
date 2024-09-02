using System;
using System.Collections.Generic;

namespace GeekSpace.Server.Models;

public partial class Vendite
{
    public int IdVendita { get; set; }

    public DateOnly? SellingDateOfSell { get; set; }

    public int? IdCarrello { get; set; }

    public virtual Carrelli? IdCarrelloNavigation { get; set; }
}
