using System.Collections.Generic;
using System.Threading.Tasks;
using server.api.Dto;

namespace server.api.service
{
    public interface IForexDataService
    {
        Task<IList<Symbol>> GetSymbolsAsync();
    }
}