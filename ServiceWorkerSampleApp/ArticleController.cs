using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ServiceWorkerSampleApp
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IWebHostEnvironment env;

        public ArticleController(IWebHostEnvironment env)
        {
            this.env = env;
        }


        [HttpGet("serviceWorker")]
        public IActionResult ServiceWorker()
        {
            var filePath = Path.Combine(this.env.WebRootPath, "js","sw.js");
            var result = System.IO.File.ReadAllBytes(filePath);
            return File(result, "text/javascript"); // returns a FileStreamResult
        }
    }
}
