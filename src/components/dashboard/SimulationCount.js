import React from 'react'

const SimulationCount = ({ title, count }) => {
  return (
    <div className='card rounded-lg p-4 text-white space-y-4'>
      <div className='border-b border-slate-200 dark:border-navy-500 pb-3'>
        <h2 className='font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base text-center'>
          {title}
        </h2>
      </div>
      <div className='h-full flex items-center justify-center'>
        <p className='text-4xl tracking-tight text-primary dark:text-accent-light text-center'>
          {count}
        </p>
      </div>
    </div>
  )
}

export default SimulationCount
