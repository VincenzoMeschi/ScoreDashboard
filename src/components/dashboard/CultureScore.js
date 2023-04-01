import React from 'react'
import CustomPaiChart from '../ui/CustomPaiChart'

const CultureScore = ({ score }) => {
  return (
    <>
      <div>
        <h2 className='font-medium text-center tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base'>
          Culture Score
        </h2>
      </div>
      <div className='h-full w-full flex items-center justify-center'>
        <CustomPaiChart score={score} />
      </div>
    </>
  )
}

export default CultureScore
