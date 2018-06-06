using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Routing;
using System.Web.Http.Tracing;

namespace EsriaqWebApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //NLog tracer
            GlobalConfiguration.Configuration.Services.Replace(typeof(ITraceWriter), new NLogger());

            // Web API configuration and services

            //Habilitando CORS            
            var urlPermitidas = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(urlPermitidas);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "ApiEmailPlusPassword",
                routeTemplate: "api/{controller}/{email}/{password}",
                defaults: null,
                constraints: new { email = @"[a-zA-Z0-9@]+", password = @"[a-zA-Z0-9]+", controller = "usuarios", httpMethod = new HttpMethodConstraint(HttpMethod.Get) }
            );

            config.Routes.MapHttpRoute(
                name: "DefaultApiPlusActionAndUserid",
                routeTemplate: "api/{controller}/{action}/{userID}",
                defaults: new { action = "Usuario" },
                constraints: new { userID = @"\d+", controller = "rq_operaciones", action = "Usuario", httpMethod = new HttpMethodConstraint(HttpMethod.Get) }
            );

            config.Routes.MapHttpRoute(
               name: "DefaultApi",
               routeTemplate: "api/{controller}/{id}",
               defaults: new { id = RouteParameter.Optional }
           );
        }
    }
}
