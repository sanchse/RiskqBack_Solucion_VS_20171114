using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace EsriaqWebApi.Controllers
{
    public class UsuariosController : ApiController
    {
        private riskquimEntities _db = new riskquimEntities();

        [ResponseType(typeof(usuario))]
        public IHttpActionResult GetUsuarioByEmailAndPassword(string email, string password)
        {
            usuario usuario = _db.usuarios.Where(u => u.Email.Equals(email)).First(u => u.Password.Equals(password));

            if (usuario == null)
            {
                return NotFound();
            }

            return Ok(usuario);
        }

        // GET: api/usuarios
        public IQueryable<usuario> Getusuarios()
        {
            return _db.usuarios;
        }

        // GET: api/usuarios/5
        [ResponseType(typeof(usuario))]
        public IHttpActionResult Getusuario(int id)
        {
            usuario usuario = _db.usuarios.Find(id);
            if (usuario == null)
            {
                return NotFound();
            }

            return Ok(usuario);
        }

        // PUT: api/usuarios/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putusuario(int id, usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usuario.ID_Usuario)
            {
                return BadRequest();
            }

            _db.Entry(usuario).State = EntityState.Modified;

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioExists(id))
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

        // POST: api/usuarios
        [ResponseType(typeof(usuario))]
        public IHttpActionResult Postusuario(usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usu = _db.usuarios.Add(usuario);

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                //El usuario existe
                return Conflict();
            }

            

            return CreatedAtRoute("DefaultApi", new { id = usuario.ID_Usuario }, usuario);
        }

        // DELETE: api/usuarios/5
        [ResponseType(typeof(usuario))]
        public IHttpActionResult Deleteusuario(int id)
        {
            usuario usuario = _db.usuarios.Find(id);
            if (usuario == null)
            {
                return NotFound();
            }

            _db.usuarios.Remove(usuario);
            _db.SaveChanges();

            return Ok(usuario);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UsuarioExists(int id)
        {
            return _db.usuarios.Count(e => e.ID_Usuario == id) > 0;
        }
    }
}