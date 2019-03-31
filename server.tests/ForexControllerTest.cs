using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Moq;
using server.api.Controllers;
using server.api.Dto;
using server.api.service;
using Xunit;

namespace server.tests
{
    public class ForexControllerTest
    {
        private readonly ForexController _controller;
        private readonly IForexDataService _service;

        private readonly List<Symbol> mockResult = new List<Symbol>
        {
            new Symbol{ name = "EURUSD" },
            new Symbol{ name = "USDJPY" },
            new Symbol{ name = "GBPUSD" },
            new Symbol{ name = "USDCAD" },
            new Symbol{ name = "USDCHF" },
            new Symbol{ name = "AUDUSD" },
            new Symbol{ name = "NZDUSD" },
            new Symbol{ name = "EURGBP" },
            new Symbol{ name = "EURCHF" },
            new Symbol{ name = "EURCAD" }
        };

        public ForexControllerTest()
        {
            Mock<IForexDataService> mock = new Mock<IForexDataService>();
            mock.Setup(service => service.GetSymbolsAsync()).ReturnsAsync(() => mockResult);
            _service = mock.Object;
            _controller = new ForexController(_service);
        }

        [Fact]
        public async Task Get_WhenCalled_ReturnsOkResult()
        {
            //Act
            var okResult = await _controller.GetSymbols();

            //Assert
            Assert.IsType<OkObjectResult>(okResult.Result);
        }

        [Fact]
        public async Task Get_WhenCalled_ReturnsListofSymbols()
        {
            try
            {
                //Act
                ActionResult<IList<Symbol>> response = await _controller.GetSymbols();
                OkObjectResult okResult = response.Result as OkObjectResult;

                //Assert
                Assert.IsType<List<Symbol>>(okResult.Value);
                IList<Symbol> symbols = okResult.Value as IList<Symbol>;
                Assert.Equal(10, symbols.Count);

            }
            catch(Exception e)
            {
                Console.WriteLine("There has been an error {0}", e);
            }
        }
    }
}
