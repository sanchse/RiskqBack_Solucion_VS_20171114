using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ESRIAQWeb.Usuarios;

namespace ESRIAQWeb
{
    public partial class PaginaRegistrarUsuario : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Registra_Click(object sender, EventArgs e)
        {
            errorlabel.Visible = false;

            var autenticacion = new Usuarios.Usuarios();

            if (Session["AUTH_ID_Usuario"] == null)
                Session.Add("AUTH_ID_Usuario", "");

            if (Session["AUTH_Email"] == null)
                Session.Add("AUTH_Email", "");

            if (Session["AUTH_password"] == null)
                Session.Add("AUTH_password", "");

            Usuarios.Usuarios usuario = new Usuarios.Usuarios();
            usuario.Email = IdentificadorRegistro.Text;
            usuario.Password = ClaveRegistro.Text;

            if (Autenticacion.RegistraUsuario(usuario))
            {                
                var usuarioautenticado = Autenticacion.AutenticaUsuario(usuario.Email, usuario.Password);
                if (usuarioautenticado != null)
                {
                    Session["AUTH_ID_Usuario"] = usuarioautenticado.ID_Usuario;
                    Session["AUTH_Email"] = usuarioautenticado.Email;
                    Session["AUTH_password"] = usuarioautenticado.Password;

                    Response.Redirect("~/PaginaMisOperaciones.aspx");
                }
            }

            errorlabel.Text = "Identificador y/o clave incorrectas";
            errorlabel.Visible = true;                       
        }
    }
}