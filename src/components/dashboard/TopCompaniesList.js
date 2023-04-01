import React from 'react'
import { Link } from 'react-router-dom'

const TopCompaniesList = ({ companies }) => {
  return (
    <>
      <div className='border-b border-slate-200 dark:border-navy-500 pb-3'>
        <h2 className='font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base text-center'>
          Top Companies
        </h2>
      </div>
      <div className=''>
        <ul className='space-y-1.5 font-inter font-medium'>
          {companies.map((comapany) => (
            <Link to={`/company/${comapany?._id}`} key={comapany._id}>
              <div className='group flex space-x-4 items-center rounded p-2 tracking-wide outline-none transition-all hover:bg-primary/10 hover:text-primary dark:hover:bg-accent-light/15 dark:hover:text-accent-light text-primary'>
                <img
                  className='h-9 w-9 rounded'
                  src={comapany.logo}
                  alt={comapany.name}
                />
                <p className='tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base'>
                  {comapany.name}
                </p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TopCompaniesList
