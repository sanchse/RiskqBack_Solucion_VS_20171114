using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ESRIAQWeb
{
    public partial class PaginaMisOperacion : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                mpe.Hide();
                if ((Session["AUTH_ID_Usuario"] == null) || (Session["AUTH_ID_Usuario"].ToString() == "") || (Session["AUTH_ID_Usuario"].ToString() == "0"))
                {
                    //Usuario no logeado
                    //var autenticacion = new Usuarios.Usuarios();

                    if (Session["AUTH_ID_Usuario"] == null)
                        Session.Add("AUTH_ID_Usuario", "");

                    if (Session["AUTH_Email"] == null)
                        Session.Add("AUTH_Email", "");

                    if (Session["AUTH_password"] == null)
                        Session.Add("AUTH_password", "");

                    //Generar Usuario Automatico
                    Usuarios.Usuarios usuarioTemp = Usuarios.Autenticacion.AutoGeneraUsuario(HttpContext.Current.Session.SessionID);
                    Usuarios.Usuarios usuarioAutenticado =
                        Usuarios.Autenticacion.AutenticaUsuario(usuarioTemp.Email, usuarioTemp.Password);
                    if (usuarioAutenticado != null)
                    {
                        Session["AUTH_ID_Usuario"] = usuarioAutenticado.ID_Usuario;
                        Session["AUTH_Email"] = usuarioAutenticado.Email;
                        Session["AUTH_password"] = usuarioAutenticado.Password;
                    }

                    //HiddenField campooculto = (HiddenField) Master.FindControl("ID_Usuario");
                    //campooculto.Value = Session["AUTH_ID_Usuario"].ToString();

                    if (Session["AUTH_Informado"] == null)
                    {
                        Session.Add("AUTH_Informado", "0");
                        mpe.Show();
                    }
                }
            }
        }

        protected void imgbtnClose_OnClick(object sender, ImageClickEventArgs e)
        {
            mpe.Hide();
        }
    }
}