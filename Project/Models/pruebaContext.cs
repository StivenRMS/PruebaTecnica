using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Project.Models
{
    public partial class pruebaContext : DbContext
    {
        public pruebaContext()
        {
        }

        public pruebaContext(DbContextOptions<pruebaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TbEmpleado> TbEmpleados { get; set; } = null!;
        public virtual DbSet<TbUser> TbUsers { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOPRMS\\SQLEXPRESS; DataBase=prueba;Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TbEmpleado>(entity =>
            {
                entity.ToTable("Tb_empleados");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CantidadH).HasColumnName("cantidadH");

                entity.Property(e => e.Dpi)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("dpi");

                entity.Property(e => e.FechaReg)
                    .HasColumnType("date")
                    .HasColumnName("fechaReg");

                entity.Property(e => e.NombreC)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("nombreC");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.SalarioB).HasColumnName("salarioB");

                entity.Property(e => e.Usuario)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("usuario");
            });

            modelBuilder.Entity<TbUser>(entity =>
            {
                entity.ToTable("Tb_users");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DateOfBirth)
                    .HasColumnType("date")
                    .HasColumnName("date_of_birth");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.TokenRecovery)
                    .HasMaxLength(10)
                    .HasColumnName("token_recovery")
                    .IsFixedLength();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
