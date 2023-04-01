import React from 'react'
import { Link } from 'react-router-dom'
import { companiesDemo } from './../../utils/data'

const TopEmployeesList = ({ employees, selected }) => {
  // Test code Employees avatar will be companies avatar that's why initially fetched from customer
  function getCompanyAvatar(employeeCompany) {
    let company = companiesDemo.find((item) => item._id === employeeCompany)
    return company?.logo
  }

  return (
    <>
      <div className='border-b border-slate-200 dark:border-navy-500 pb-3'>
        <h2 className='font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base text-center'>
          Top Employees
        </h2>
      </div>
      <div className=''>
        <ul className='space-y-1.5 font-inter font-medium'>
          {employees.map((employee, index) => (
            <Link key={index} to={`/employee/${employee._id}`}>
              <div
                className={`group flex space-x-4 items-center rounded p-2 tracking-wide outline-none transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary dark:hover:bg-accent-light/15 dark:hover:text-accent-light dark:focus:bg-accent-light/15 dark:focus:text-accent-light text-primary ${
                  employee._id === selected &&
                  'text-primary bg-primary/10 dark:hover:bg-accent-light/15 dark:hover:text-accent-light'
                }`}
              >
                <img
                  className='h-10 w-10 rounded object-cover'
                  src={getCompanyAvatar(employee.company)}
                  alt={employee.name}
                />
                <div>
                  <p className='tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base'>
                    {employee.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TopEmployeesList
