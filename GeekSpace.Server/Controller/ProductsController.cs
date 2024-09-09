using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GeekSpace.Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GeekSpace.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdottiController : ControllerBase
    {
        private readonly GeekSpaceContext _context;

        public ProdottiController(GeekSpaceContext context)
        {
            _context = context;
        }

        // GET: api/Prodotti
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Prodotti>>> GetProdottis()
        {
            return await _context.Prodottis.ToListAsync();
        }

        // GET: api/Prodotti/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Prodotti>> GetProdotti(int id)
        {
            var prodotto = await _context.Prodottis.FindAsync(id);

            if (prodotto == null)
            {
                return NotFound();
            }

            return prodotto;
        }

        // PUT: api/Prodotti/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProdotti(int id, Prodotti prodotto)
        {
            if (id != prodotto.IdProdotto)
            {
                return BadRequest();
            }

            _context.Entry(prodotto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdottiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Prodotti
        [HttpPost]
        public async Task<ActionResult<Prodotti>> PostProdotti(Prodotti prodotto)
        {
            _context.Prodottis.Add(prodotto);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProdotti), new { id = prodotto.IdProdotto }, prodotto);
        }

        // DELETE: api/Prodotti/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProdotti(int id)
        {
            var prodotto = await _context.Prodottis.FindAsync(id);
            if (prodotto == null)
            {
                return NotFound();
            }

            _context.Prodottis.Remove(prodotto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProdottiExists(int id)
        {
            return _context.Prodottis.Any(e => e.IdProdotto == id);
        }
    }
}
