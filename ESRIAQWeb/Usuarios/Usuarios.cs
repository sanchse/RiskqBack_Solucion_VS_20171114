using System;

namespace ESRIAQWeb.Usuarios
{
    public class Usuarios : IDisposable
    {
        public Int64 ID_Usuario { get; set; }
        public string Email { get; set;  }
        public string Password { get; set; }
        public DateTime Fecha_Creacion { get; set; }

        public void Dispose()
        {
            
        }
    }
}