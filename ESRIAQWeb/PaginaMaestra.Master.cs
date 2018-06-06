using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ESRIAQWeb.Usuarios;

namespace ESRIAQWeb
{
    public partial class PaginaMaestra : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {            
            HiddenField campooculto = (HiddenField)this.FindControl("ID_Usuario");
            var o = Session["AUTH_ID_Usuario"];
            if (o != null) campooculto.Value = o.ToString();
           
            HiddenField rqbackurl = (HiddenField)this.FindControl("RQBack_URL");
            rqbackurl.Value = ConfigurationManager.AppSettings["RQBack_URL"].ToString(); 
           
            if ((Session["AUTH_ID_Usuario"] == null) || (Session["AUTH_ID_Usuario"].ToString() == ""))
            {
                //Usuario No Logado
                panelLogado.Visible = false;
                panelNologado.Visible = true;
            }
            else
            {
                //Usuario Logado
                //Pasamos los valores a los Texbox por si acaso
                Identificador.Text = Session["AUTH_Email"].ToString();
                Clave.Text = Session["AUTH_password"].ToString();

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

            using (Usuarios.Usuarios usuario = Autenticacion.AutenticaUsuario(Identificador.Text, Clave.Text))
            {
                if (usuario != null)
                {
                    Session["AUTH_ID_Usuario"] = usuario.ID_Usuario;
                    Session["AUTH_Email"] = usuario.Email;
                    Session["AUTH_password"] = usuario.Password;
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
}