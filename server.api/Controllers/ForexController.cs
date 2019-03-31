using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.api.Dto;
using server.api.service;

namespace server.api.Controllers
{
    [ApiController]
    public class ForexController : ControllerBase
    {
        private readonly IForexDataService _service;

        public ForexController(IForexDataService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("~/v1/symbols")]
        public async Task<ActionResult<IList<Symbol>>> GetSymbols()
        {
            try
            {
                IList<Symbol> symbols = await _service.GetSymbolsAsync();
                return Ok(symbols);

            }
            catch(Exception)
            {
                return NotFound();
            }
        }
    }
}
