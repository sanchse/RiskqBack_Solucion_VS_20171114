using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplication1.Usuarios;

namespace ESRIAQWeb01
{
    public partial class PaginaMisOperaciones : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Session["AUTH_Informado"] == null)
                    Session.Add("AUTH_Informado", 0);

                if (Session["AUTH_ID_Usuario"] == null)
                {
                    //Usuario no logeado
                    var autenticacion = new Usuarios();

                    if (Session["AUTH_ID_Usuario"] == null)
                        Session.Add("AUTH_ID_Usuario", "");

                    if (Session["AUTH_Email"] == null)
                        Session.Add("AUTH_Email", "");

                    if (Session["AUTH_password"] == null)
                        Session.Add("AUTH_password", "");

                    //Generar Usuario Automatico
                    autenticacion.AutoGeneraUsuario(HttpContext.Current.Session.SessionID);

                    if (autenticacion.AutenticaUsuario(autenticacion.EmailUsuario, autenticacion.ClaveUsuario))
                    {
                        Session["AUTH_ID_Usuario"] = autenticacion.IdUsuario;
                        Session["AUTH_Email"] = autenticacion.EmailUsuario;
                        Session["AUTH_password"] = autenticacion.ClaveUsuario;
                    }
                }
            }
        }
    }
}