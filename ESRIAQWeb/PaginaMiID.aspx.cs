using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ESRIAQWeb
{
    public partial class PaginaMiID : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Clear();
            Response.ContentType = "text/plain";
            Response.AddHeader("content-disposition", "attachment; filename = IdentificadorUsuario.txt");
            Response.Write("Datos del usuario para futuras visitas\r\n");
            Response.Write("--------------------------------------\r\n");
            Response.Write("Identificador: " + Session["AUTH_Email"].ToString() + "\r\n");
            Response.Write("Clave: " + Session["AUTH_Password"].ToString() + "\r\n");
            Response.Flush();
            Response.End();
        }
    }
}