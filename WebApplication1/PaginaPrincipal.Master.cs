using System;

namespace WebApplication1
{
    public partial class PaginaPrincipal : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if ((Session["AUTH_ID_Usuario"] == null) || (Session["AUTH_ID_Usuario"].ToString() == ""))
            {
                panelLogado.Visible = false;
                panelNologado.Visible = true;
            }
            else
            {
                panelLogado.Visible = true;
                panelNologado.Visible = false;
            }
        }

        protected void Autentica_Click(object sender, EventArgs e)
        {
            errorlabel.Visible = false;

            var autenticacion = new Usuarios.Usuarios();

            if (Session["AUTH_ID_Usuario"] == null)
                Session.Add("AUTH_ID_Usuario", "");
            
            if (Session["AUTH_Email"] == null)
                Session.Add("AUTH_Email", "");

            if (Session["AUTH_password"] == null)
                Session.Add("AUTH_password", "");

            if (autenticacion.AutenticaUsuario(Identificador.Text, Clave.Text))
            {
                Session["AUTH_ID_Usuario"] = autenticacion.IdUsuario;
                Session["AUTH_Email"] = autenticacion.EmailUsuario;
                Session["AUTH_password"] = autenticacion.ClaveUsuario;
            }
            else
            {
                errorlabel.Text = "Identificador y/o clave incorrectas";
                errorlabel.Visible = true;
                return;
            }

            Response.Redirect("~/PaginaMisOperaciones.aspx");
        }
    }
}