import React from 'react'
import { Link } from 'react-router-dom'

const TopDepartmentLIst = ({ departments, selected }) => {
  return (
    <>
      <div class='border-b border-slate-200 dark:border-navy-500 pb-3'>
        <h2 class='font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base text-center'>
          Departments
        </h2>
      </div>
      <div class=''>
        <ul class='space-y-1.5 font-inter font-medium'>
          {departments.map((item, index) => (
            <li>
              <Link
                to={`?department=${item._id}`}
                class={`group flex space-x-4 items-center rounded p-2 tracking-wide outline-none transition-all hover:bg-primary/10 hover:text-primary dark:hover:bg-accent-light/15 dark:hover:text-accent-light ${
                  item._id === selected &&
                  'text-primary bg-primary/10 dark:hover:bg-accent-light/15 dark:hover:text-accent-light'
                }`}
              >
                <p class='px-3 py-2 rounded-full text-xs bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25'>
                  {index + 1}
                </p>
                <p class='tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base'>
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TopDepartmentLIst
