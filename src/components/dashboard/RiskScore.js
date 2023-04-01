import React from 'react'
import CustomRiskChart from '../ui/CustomRiskChart'

const RiskScore = ({ score }) => {
  return (
    <>
      <div>
        <h2 className='font-medium text-center tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base'>
          Risk Score
        </h2>
      </div>
      <div className='h-full w-full flex items-center justify-center'>
        <CustomRiskChart score={score} />
      </div>
    </>
  )
}

export default RiskScore
