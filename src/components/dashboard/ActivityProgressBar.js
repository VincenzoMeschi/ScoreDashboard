import React from 'react'
import { getCultureColor, getProgressColor } from './../../utils/engagedSecurity'

const ActivityProgressBar = ({ title, progress }) => {
  const color = getCultureColor(progress)
  return (
    <div className='card rounded-lg p-4 text-white space-y-4'>
      <div className='border-b border-slate-200 dark:border-navy-500 pb-3'>
        <h2 className='font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base text-center'>
          {title}
        </h2>
      </div>
      <div className='pt-2 h-full flex items-center'>
        <div className='progress h-6 bg-slate-150 dark:bg-navy-500'>
          <div
            id='behavier_acitivity'
            style={{ width: `${progress}%`, backgroundColor: `${color}`}}
            className={`rounded-full bg-primary dark:bg-primary flex items-center justify-end px-3 text-white`}
          >
            {`${progress}%`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityProgressBar
