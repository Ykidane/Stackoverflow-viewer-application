﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataLayer;
using Microsoft.AspNetCore.Mvc;

namespace WebService.Controllers
{
    public class QuestionsController : Controller
    {
        DataService _dataService;
        public QuestionsController(DataService dataService)
        {
            _dataService = dataService;
        }
    }
}