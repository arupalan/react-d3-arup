using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using server.api.Dto;
using server.api.Helper;

namespace server.api.service
{
    public class StockDataService : IStockDataService
    {

        public async Task<List<Stock>> GetStocksAsync()
        {
            try
            {
                return await DataStore.GetStocksAsync();
            }
            catch (HttpRequestException)
            {
                return null;
            }
        }
    }
}
