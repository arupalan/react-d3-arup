using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using server.api.Dto;
using server.api.service;

namespace server.api.api
{
    public class ForgeHttpClient 
    {
        private readonly HttpClient _client;
        public ForgeHttpClient(HttpClient client)
        {
            _client = client;
        }

        public async Task<IList<Symbol>> GetSymbolsAsync()
        {
            var result = await _client.GetStringAsync("/1.0.3/symbols?api_key=JTXzgY3GF4EwpMVBc1mMUusqQtOTcSCt");
            string[] symbols = JsonConvert.DeserializeObject<string[]>(result);
            IList<Symbol> lstSymbols = new List<Symbol>();
            for (int i = 0, symbolsLength = symbols.Length; i < symbolsLength; i++)
            {
                string symbol = symbols[i];
                lstSymbols.Add(new Symbol { name = symbol });
            }
            return lstSymbols;
        }
    }
}
