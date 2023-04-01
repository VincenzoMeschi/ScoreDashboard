import React from 'react'

const ActivityStatus = ({ title, status }) => {
  let color = status === 'SECURE' ? 'success' : 'secondary'

  return (
    <div className='card rounded-lg p-4 text-white space-y-4'>
      <div className='border-b border-slate-200 dark:border-navy-500 pb-3'>
        <h2 className='font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base text-center'>
          {title}
        </h2>
      </div>
      <div className=''>
        <div
          className={`alert flex overflow-hidden rounded-lg bg-${color}/10 text-${color} dark:bg-${color}-light/15 dark:text-${color}-light`}
        >
          <div className={`w-1.5 bg-${color}`}></div>
          <div className='p-1 text-md'>{status}</div>
        </div>
      </div>
    </div>
  )
}

export default ActivityStatus
