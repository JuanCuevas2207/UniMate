using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using UniMate.Classes;

namespace UniMate.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            List<Residence> recidences = new List<Residence>();

            Residence residence = new Residence{
                address = "Cll",
                cost = 1,
                availability = true,
                availabiltyDate = DateTime.Today,
                roomsNumber = 4,
                rating = 5
            };

            recidences.Add(residence);
            recidences.Add(residence);
            recidences.Add(residence);
            recidences.Add(residence);
            recidences.Add(residence);
            
            return View(recidences);
        }
    }
}
