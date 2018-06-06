using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Tracing;

namespace EsriaqWebApi.Controllers
{
    public class rq_operacionesController : ApiController
    {
        //private static readonly Logger logger = LogManager.GetCurrentClassLogger();
        private readonly ITraceWriter tracer;

        private riskquimEntities db = new riskquimEntities();

        public rq_operacionesController()
        {
            tracer = GlobalConfiguration.Configuration.Services.GetTraceWriter();
        }


        // GET: api/rq_operaciones
        public IQueryable<rq_operaciones> Getrq_operaciones()
        {
            tracer.Info(Request, this.ControllerContext.ControllerDescriptor.ControllerType.FullName, "Operaciones devueltas: " + db.rq_operaciones.Count());
            //logger.Debug("GET api/rq_operaciones");
            return db.rq_operaciones;
        }

        // GET: api/rq_operaciones/5
        [ResponseType(typeof(rq_operaciones))]
        public IHttpActionResult Getrq_operaciones(long id)
        {
            rq_operaciones rqOperaciones = db.rq_operaciones.Find(id);
            if (rqOperaciones == null)
            {
                return NotFound();
            }

            return Ok(rqOperaciones);
        }

        // GET: api/r_operaciones/Usuario/<userID>
        /// <summary>
        /// Obtiene las operaciones asociadas a un usuario concreto.
        /// </summary>
        /// <param name="userID">ID del usuario del que se desea obtener las operaciones que tiene asociadas</param>
        /// <returns>Listado completo de las operaciones</returns>
        [ActionName("Usuario")]
        public IEnumerable<rq_operaciones> Getrq_operacionesByUser(long userID)
        {
            tracer.Info(Request, this.ControllerContext.ControllerDescriptor.ControllerType.FullName, "Usuario Solicitado: " + userID);

            var rqOperaciones = db.rq_operaciones.Where(op => op.ID_Usuario.Equals(userID));
            return rqOperaciones;
        }

        // PUT: api/rq_operaciones/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putrq_operaciones(long id, rq_operaciones rqOperaciones)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rqOperaciones.ID_Operacion)
            {
                return BadRequest();
            }

            db.Entry(rqOperaciones).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!rq_operacionesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/rq_operaciones
        [ResponseType(typeof(rq_operaciones))]
        public IHttpActionResult Postrq_operaciones(rq_operaciones rqOperaciones)
        {
            tracer.Debug(Request, this.ControllerContext.ControllerDescriptor.ControllerType.FullName, "URI: " + Request.RequestUri);
            if (!ModelState.IsValid)
            {                
                return BadRequest(ModelState);
            }

            int operaciones_guardadas = 0;

            try
            {
                db.rq_operaciones.Add(rqOperaciones);
                operaciones_guardadas = db.SaveChanges();
                tracer.Debug(Request, this.ControllerContext.ControllerDescriptor.ControllerType.FullName, "Operaciones guardadas: " + operaciones_guardadas);
            }
            catch (System.Exception ex)
            {
                tracer.Error(Request, this.ControllerContext.ControllerDescriptor.ControllerType.FullName, "Operacion de BBDD fallida: " + ex.Message);
                throw;
            }

            if (operaciones_guardadas == 0) { 
                tracer.Warn(Request, this.ControllerContext.ControllerDescriptor.ControllerType.FullName, "Operacion SaveChanges sin exito: " + operaciones_guardadas);
                return BadRequest(ModelState);
            }
            else
            {
                return CreatedAtRoute("DefaultApi", new { id = rqOperaciones.ID_Operacion }, rqOperaciones);
            }
        }

        // DELETE: api/rq_operaciones/5
        [ResponseType(typeof(rq_operaciones))]
        public IHttpActionResult Deleterq_operaciones(long id)
        {
            rq_operaciones rqOperaciones = db.rq_operaciones.Find(id);
            if (rqOperaciones == null)
            {
                return NotFound();
            }

            //TODO : gestionar el acceso a BBDD con try catch
            db.rq_operaciones.Remove(rqOperaciones);
            db.SaveChanges();

            return Ok(rqOperaciones);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool rq_operacionesExists(long id)
        {
            return db.rq_operaciones.Count(e => e.ID_Operacion == id) > 0;
        }
    }
}