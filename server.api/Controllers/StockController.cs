using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using server.api.Dto;
using server.api.Helper;
using server.api.service;

namespace server.api.Controllers
{
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly IStockDataService _service;

        public StockController(IStockDataService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("~/v1/stocks")]
        public async Task<ActionResult<IList<Stock>>> GetStocks()
        {
            try
            {
                List<Stock> stocks = await _service.GetStocksAsync();
                return Ok(stocks);
            }
            catch (HttpRequestException)
            {
                return NotFound();
            }
        }

    }
}

