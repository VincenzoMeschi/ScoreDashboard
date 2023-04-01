import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const SecurityCultureTimeline = () => {
  const data = [
    {
      name: 'Page A',
      value: 0,
    },
    {
      name: 'Page B',
      value: 500,
    },
    {
      name: 'Page C',
      value: 2000,
    },
    {
      name: 'Page D',
      value: 2780,
    },
    {
      name: 'Page E',
      value: 1890,
    },
    {
      name: 'Page F',
      value: 2390,
    },
    {
      name: 'Page G',
      value: 3490,
    },
  ]
  return (
    <>
      <div className='my-3 flex h-8 items-center justify-between'>
        <h2 className='font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base'>
          Security Culture Timeline
        </h2>
      </div>
      <div>
        <div className='mt-5'>
          <ResponsiveContainer width='100%' height={200}>
            <LineChart width={300} height={100} data={data}>
              <Line
                type='monotone'
                dataKey='value'
                stroke='#8884d8'
                strokeWidth={5}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}

export default SecurityCultureTimeline
