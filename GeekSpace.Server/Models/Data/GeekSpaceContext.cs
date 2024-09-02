using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace GeekSpace.Server.Models;

public partial class GeekSpaceContext : DbContext
{
    public GeekSpaceContext()
    {
    }

    public GeekSpaceContext(DbContextOptions<GeekSpaceContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Carrelli> Carrellis { get; set; }

    public virtual DbSet<ElementiCarrello> ElementiCarrellos { get; set; }

    public virtual DbSet<Prodotti> Prodottis { get; set; }

    public virtual DbSet<Tipo> Tipos { get; set; }

    public virtual DbSet<Utenti> Utentis { get; set; }

    public virtual DbSet<Vendite> Vendites { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Initial Catalog=GeekSpace;Integrated Security=True;Trust Server Certificate=True; Trusted_Connection=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Carrelli>(entity =>
        {
            entity.HasKey(e => e.IdCarrello).HasName("PK__carrelli__369BB4678F675B5D");

            entity.ToTable("carrelli");

            entity.Property(e => e.IdCarrello)
                .ValueGeneratedNever()
                .HasColumnName("idCarrello");
            entity.Property(e => e.IdUser).HasColumnName("id_user");

            entity.HasOne(d => d.IdUserNavigation).WithMany(p => p.Carrellis)
                .HasForeignKey(d => d.IdUser)
                .HasConstraintName("FK__carrelli__id_use__3F466844");
        });

        modelBuilder.Entity<ElementiCarrello>(entity =>
        {
            entity.HasKey(e => e.IdElementoCarrello).HasName("PK__elementi__7C55BC269864DAA8");

            entity.ToTable("elementi_carrello");

            entity.Property(e => e.IdElementoCarrello)
                .ValueGeneratedNever()
                .HasColumnName("idElementoCarrello");
            entity.Property(e => e.IdCarrello).HasColumnName("id_carrello");
            entity.Property(e => e.IdProdotto).HasColumnName("id_prodotto");
            entity.Property(e => e.Quantita).HasColumnName("quantita");

            entity.HasOne(d => d.IdCarrelloNavigation).WithMany(p => p.ElementiCarrellos)
                .HasForeignKey(d => d.IdCarrello)
                .HasConstraintName("FK__elementi___id_ca__4222D4EF");

            entity.HasOne(d => d.IdProdottoNavigation).WithMany(p => p.ElementiCarrellos)
                .HasForeignKey(d => d.IdProdotto)
                .HasConstraintName("FK__elementi___id_pr__4316F928");
        });

        modelBuilder.Entity<Prodotti>(entity =>
        {
            entity.HasKey(e => e.IdProdotto).HasName("PK__prodotti__0A9870D90208105C");

            entity.ToTable("prodotti");

            entity.Property(e => e.IdProdotto)
                .ValueGeneratedNever()
                .HasColumnName("idProdotto");
            entity.Property(e => e.ProdottoBrand)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("prodotto_brand");
            entity.Property(e => e.ProdottoDescription)
                .HasColumnType("text")
                .HasColumnName("prodotto_description");
            entity.Property(e => e.ProdottoIsAvaiable).HasColumnName("prodotto_is_avaiable");
            entity.Property(e => e.ProdottoIsRgb).HasColumnName("prodotto_is_rgb");
            entity.Property(e => e.ProdottoName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("prodotto_name");
            entity.Property(e => e.ProdottoPicture)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("prodotto_picture");
            entity.Property(e => e.ProdottoPriceUnit)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("prodotto_price_unit");
            entity.Property(e => e.ProdottoPrimaryColour)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("prodotto_primary_colour");
            entity.Property(e => e.ProdottoSecondaryColour)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("prodotto_secondary_colour");
            entity.Property(e => e.TipoDesign).HasColumnName("tipo_design");
            entity.Property(e => e.TipoNature).HasColumnName("tipo_nature");

            entity.HasOne(d => d.TipoDesignNavigation).WithMany(p => p.ProdottiTipoDesignNavigations)
                .HasForeignKey(d => d.TipoDesign)
                .HasConstraintName("FK__prodotti__tipo_d__3A81B327");

            entity.HasOne(d => d.TipoNatureNavigation).WithMany(p => p.ProdottiTipoNatureNavigations)
                .HasForeignKey(d => d.TipoNature)
                .HasConstraintName("FK__prodotti__tipo_n__398D8EEE");
        });

        modelBuilder.Entity<Tipo>(entity =>
        {
            entity.HasKey(e => e.IdTipo).HasName("PK__tipo__BDD0DFE1BB0F2409");

            entity.ToTable("tipo");

            entity.Property(e => e.IdTipo)
                .ValueGeneratedNever()
                .HasColumnName("idTipo");
            entity.Property(e => e.TipoDescription)
                .HasColumnType("text")
                .HasColumnName("tipo_description");
            entity.Property(e => e.TipoDesign)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("tipo_design");
            entity.Property(e => e.TipoNature)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("tipo_nature");
            entity.Property(e => e.TipoPrimaryColour)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("tipo_primary_colour");
            entity.Property(e => e.TipoSecondaryColour)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("tipo_secondary_colour");
        });

        modelBuilder.Entity<Utenti>(entity =>
        {
            entity.HasKey(e => e.IdUser).HasName("PK__utenti__3717C98298C16984");

            entity.ToTable("utenti");

            entity.Property(e => e.IdUser)
                .ValueGeneratedNever()
                .HasColumnName("idUser");
            entity.Property(e => e.UserEmail)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("user_email");
            entity.Property(e => e.UserPassword)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("user_password");
            entity.Property(e => e.UserRole)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("user_role");
            entity.Property(e => e.UserUsername)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("user_username");
        });

        modelBuilder.Entity<Vendite>(entity =>
        {
            entity.HasKey(e => e.IdVendita).HasName("PK__vendite__B5DA914CC388B468");

            entity.ToTable("vendite");

            entity.Property(e => e.IdVendita)
                .ValueGeneratedNever()
                .HasColumnName("idVendita");
            entity.Property(e => e.IdCarrello).HasColumnName("id_carrello");
            entity.Property(e => e.SellingDateOfSell).HasColumnName("selling_date_of_sell");

            entity.HasOne(d => d.IdCarrelloNavigation).WithMany(p => p.Vendites)
                .HasForeignKey(d => d.IdCarrello)
                .HasConstraintName("FK__vendite__id_carr__45F365D3");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
