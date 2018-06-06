using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data;
using System.Configuration;
using System.Text.RegularExpressions;
using System.Web.Configuration;
using MySql.Data.MySqlClient;

namespace WebApplication1.Usuarios
{
    public class Usuarios
    {
        public string IdUsuario { get; set; }
        public string EmailUsuario { get; set; }
        public string ClaveUsuario { get; set; }

        public bool AutenticaUsuario(string userEmail, string userPassword)
        {
            //string conexion = ConfigurationManager.ConnectionStrings["riskquimdb"].ToString();
            var conexion = WebConfigurationManager.ConnectionStrings["riskquimdb"].ConnectionString;

            using (MySqlConnection conn = new MySqlConnection(conexion))
            {
                conn.Open();
                string query = "Select * from Usuarios Where Email = ?email and Password = ?passw";
                //string query = "Select * from Usuarios Where Email = 'A1688316319' and Password='58486960';";

                MySqlCommand mycomand = new MySqlCommand(query, conn);
                mycomand.Parameters.AddWithValue("?email", userEmail);
                mycomand.Parameters.AddWithValue("?passw", userPassword);

                MySqlDataReader myreader = mycomand.ExecuteReader();

                if (myreader.Read())
                {
                    //Iniciar las propiedades de la clase
                    this.IdUsuario = myreader["ID_Usuario"].ToString();
                    this.EmailUsuario = myreader["Email"].ToString();
                    this.ClaveUsuario = myreader["password"].ToString();

                    return true; //El usuario existe y el password es correcto
                }
            }
            return false;
        }

        private bool RegistraUsuario()
        {
            var conexion = WebConfigurationManager.ConnectionStrings["riskquimdb"].ConnectionString;
            int filas = 0;

            using (MySqlConnection conn = new MySqlConnection(conexion))
            {
                conn.Open();
                string query = "INSERT INTO Usuarios (email, password) VALUES (?email, ?passw);";

                MySqlCommand mycomand = new MySqlCommand(query, conn);
                mycomand.Parameters.AddWithValue("?email", this.EmailUsuario);
                mycomand.Parameters.AddWithValue("?passw", this.ClaveUsuario);

                filas = mycomand.ExecuteNonQuery();
            }
            return filas>0;
        }

        public void AutoGeneraUsuario(string sessionId)
        {
            this.EmailUsuario = generarUsuario(sessionId);
            this.ClaveUsuario = generarPassword();
            this.IdUsuario = sessionId;

            RegistraUsuario();
        }

        private string generarPassword()
        {
            int max = 99999999;
            int min = 10000000;

            var rnd = new Random();
            int  passwordrandom = rnd.Next(min, max);

            string resultado = (passwordrandom*2).ToString();

            return resultado;
        }

        private string generarUsuario(string sessionID)
        {
            int max = int.MaxValue;
            int min = 10000000;

            var rnd = new Random();
            int valor = rnd.Next(min, max);
            
            //uint useridrandom = UInt32.Parse(valor.ToString());
            return "A" + valor.ToString();
        }

        public string neteja_input(string particula, int longitud)
        {
            string resultado = particula.Substring(0, Math.Max(particula.Length-1, longitud));

            resultado = resultado.Replace(" ", "");
            resultado = resultado.Replace(";", "");
            resultado = resultado.Replace("'", "");
            resultado = resultado.Replace("?", "");
            resultado = resultado.Replace("/", "");

            return resultado;
        }
    }
}