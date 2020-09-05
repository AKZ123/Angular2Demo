using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmpWabAPISErvice.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<AngularEmp> Get()
        {
            using (EmployeeDBEntities entities = new EmployeeDBEntities())
            {
                return entities.AngularEmps.ToList();
            }
        }

        public AngularEmp Get(string code)
        {
            using (EmployeeDBEntities entities = new EmployeeDBEntities())
            {
                return entities.AngularEmps.FirstOrDefault(x => x.code == code);
            }
        }
    }
}
