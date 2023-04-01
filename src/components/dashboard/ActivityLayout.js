import React from 'react'

const ActivityLayout = () => {
  return (
    <div className='card rounded-lg p-4 text-white space-y-4'>
      <div className='border-b border-slate-200 dark:border-navy-500 pb-3'>
        <h2 className='font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base text-center'>
          Activity
        </h2>
      </div>
      <div className='activity_container'>
        <p className='py-10'></p>
      </div>
    </div>
  )
}

export default ActivityLayout
