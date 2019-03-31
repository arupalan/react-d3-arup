using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using server.api.api;
using server.api.Dto;

namespace server.api.service
{
    public class ForexDataService : IForexDataService
    {
        private readonly ForgeHttpClient _client;
        public ForexDataService(ForgeHttpClient client)
        {
            _client = client;
        }
        public async Task<IList<Symbol>> GetSymbolsAsync()
        {
            try
            {
                return await _client.GetSymbolsAsync();

            }
            catch(Exception e)
            {
                throw e;
            }
        }
    }
}
