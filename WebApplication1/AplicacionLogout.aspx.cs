using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class AplicacionLogout : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["AUTH_ID_Usuario"] != null)
                Session["AUTH_ID_Usuario"] = "";

            if (Session["AUTH_Email"] != null)
                Session["AUTH_Email"] = "";

            if (Session["AUTH_password"] != null)
                Session["AUTH_password"] = "";

            Response.Redirect("~/PaginaIntroduccion.aspx");
        }
    }
}