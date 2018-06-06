using System;
using System.Configuration;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;

namespace ESRIAQWeb.Usuarios
{
    public class Autenticacion
    {
        protected static string UrlBase = ConfigurationManager.AppSettings["RQBack_URL"].ToString();

        public static Usuarios AutenticaUsuario(string userEmail, string userPassword)
        {
            //string UrlBase = ConfigurationManager.AppSettings["RQBack_URL"].ToString();
            Usuarios user = null;

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(UrlBase);

                client.DefaultRequestHeaders.Clear();
                //Define request data format
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                //Sending request to find web api REST service resource GetAllEmployees using HttpClient  
                HttpResponseMessage res = client.GetAsync("api/usuarios/" + userEmail + "/" + userPassword).Result;

                //Checking the response is successful or not which is sent using HttpClient  
                if (res.IsSuccessStatusCode)
                {
                    //Storing the response details recieved from web api   
                    var userResponse = res.Content.ReadAsStringAsync().Result;

                    //Deserializing the response recieved from web api and storing into the Employee list  
                    user = JsonConvert.DeserializeObject<Usuarios>(userResponse);
                    //userId = user.ID_Usuario;
                }
                //returning the employee list to view  
                return user;
            }
        }

        public static bool RegistraUsuario(Usuarios usuario)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(UrlBase);

                client.DefaultRequestHeaders.Clear();
                //Define request data format
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = client.PostAsJsonAsync("api/Usuarios", usuario).Result;

                try
                {
                    response.EnsureSuccessStatusCode();
                }
                catch (HttpRequestException)
                {

                    if (response.StatusCode != HttpStatusCode.Conflict)
                        throw;
                }

                return response.StatusCode == HttpStatusCode.Created;               
            }
        }

        //public static bool AutoGeneraUsuario(string sessionId)
        //{
        //    Usuarios nuevoUsuario = new Usuarios
        //    {
        //        Email = GenerarUsuario(sessionId),
        //        Password = GenerarPassword()
        //    };

        //    return RegistraUsuario(nuevoUsuario);
        //}

        public static Usuarios AutoGeneraUsuario(string sessionId)
        {
            Usuarios nuevoUsuario = new Usuarios
            {
                Email = GenerarUsuario(sessionId),
                Password = GenerarPassword()
            };

            int i = 0;            
            while (++i < 5)
            {
                //Bucle por si se repite algun usuario en la auto-generacion
                if (RegistraUsuario(nuevoUsuario))
                {
                    break;                    
                }

                nuevoUsuario = new Usuarios
                {
                    Email = GenerarUsuario(sessionId),
                    Password = GenerarPassword()
                };
            }

            if (i >= 5)
            {
                throw new HttpRequestException("Error en el registro de usuarios");
            }
            return nuevoUsuario;
        }

        private static string GenerarPassword()
        {
            int max = 99999999;
            int min = 10000000;

            var rnd = new Random();
            int passwordrandom = rnd.Next(min, max);

            string resultado = (passwordrandom * 2).ToString();

            return resultado;
        }

        private static string GenerarUsuario(string sessionId)
        {
            int max = int.MaxValue;
            int min = 10000000;

            var rnd = new Random();
            int valor = rnd.Next(min, max);

            //uint useridrandom = UInt32.Parse(valor.ToString());
            return "A" + valor.ToString();
        }

    }
}