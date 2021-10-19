using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;
using System.IO;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using TestApi.Business;
using TestApi.Models;
using TestApi.ViewModels;

namespace TestApi.Controllers
{
    public class CatalogController : Controller
    {
        TestService _service;

        ILogger<CatalogController> _log;


        public CatalogController(TestService service, ILogger<CatalogController> log)
        {
            _log = log;
            _service = service;

        }


        [HttpGet]
        public TestDTO GetAllProducts()
        {
            var result = _service.GetAllProducts();
            return result;
        }

        [HttpPost]
        public TestDTO GetProduct([FromBody]GetProductVM vm)
        {
            var result = _service.GetProduct(vm.id);
            return result;
        }


        [HttpPost]
        public TestDTO AddProduct([FromBody]AddProductVM vm)
        {
            var result = _service.AddProduct(vm.item);
            return result;
        }


        [HttpPost]
        public TestDTO RemoveProduct([FromBody]RemoveProductVM vm)
        {
            var result = _service.RemoveProduct(vm.id);
            return result;
        }


        [HttpPost]
        public TestDTO UpdateProduct([FromBody]UpdateProductVM vm)
        {
            var result = _service.UpdateProduct(vm.item);
            return result;
        }

    }
}
