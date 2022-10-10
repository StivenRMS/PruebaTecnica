using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.Models;



namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactoController : ControllerBase
    {
        private readonly pruebaContext _dbcontext;

        public ContactoController(pruebaContext context)
        {
            _dbcontext = context;
        }
        //Apis de TbUsers
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            List<TbUser> lista = await _dbcontext.TbUsers.OrderByDescending(c => c.Id).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);

        }

        [HttpPost]
        [Route("Crear")]
        public async Task<IActionResult> Crear([FromBody] TbUser request)
        {
            await _dbcontext.TbUsers.AddAsync(request);
            await _dbcontext.SaveChangesAsync();


            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] TbUser request)
        {
            _dbcontext.TbUsers.Update(request);
            await _dbcontext.SaveChangesAsync();


            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            TbUser user = _dbcontext.TbUsers.Find(id);

            _dbcontext.TbUsers.Remove(user);
            await _dbcontext.SaveChangesAsync();


            return StatusCode(StatusCodes.Status200OK, "ok");


        }
        //Api de Login
        [HttpGet]
        [Route("{username}/{password}")]
        public async Task<IActionResult> GetIniciarSesion(string username, string password)
        {
            List<TbUser> lista = await _dbcontext.TbUsers.Where(c => c.Name == username && c.Password == password).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);

        }

        //Api de TbEmpleado
        [HttpGet]
        [Route("GetAllEmpleado")]
        public async Task<IActionResult> GetAllEmpleado()
        {
            List<TbEmpleado> lista = await _dbcontext.TbEmpleados.OrderByDescending(c => c.Id).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);

        }

        [HttpPost]
        [Route("CrearEmpleado")]
        public async Task<IActionResult> CrearEmpleado([FromBody] TbEmpleado request)
        {
            await _dbcontext.TbEmpleados.AddAsync(request);
            await _dbcontext.SaveChangesAsync();


            return StatusCode(StatusCodes.Status200OK, "Guardado");
        
        }

        [HttpPut]
        [Route("EditarEmpleado")]
        public async Task<IActionResult> EditarEmpleado([FromBody] TbEmpleado request)
        {
            _dbcontext.TbEmpleados.Update(request);
            await _dbcontext.SaveChangesAsync();


            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpDelete]
        [Route("EliminarEmpleado/{id:int}")]
        public async Task<IActionResult> EliminarEmpleado(int id)
        {
            TbEmpleado user = _dbcontext.TbEmpleados.Find(id);

            _dbcontext.TbEmpleados.Remove(user);
            await _dbcontext.SaveChangesAsync();


            return StatusCode(StatusCodes.Status200OK, "ok");


        }





    }
}
