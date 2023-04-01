import React from 'react'
import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const DemoReport = () => {
  const data = [
    {
      name: 'Jan 22',
      Online: 4000,
      Marketing: 2400,
    },
    {
      name: 'Feb 22',
      Online: 3000,
      Marketing: 1398,
    },
    {
      name: 'Mar 22',
      Online: 2000,
      Marketing: 9800,
    },
    {
      name: 'Apr 22',
      Online: 2780,
      Marketing: 3908,
    },
    {
      name: 'May 22',
      Online: 1890,
      Marketing: 4800,
    },
    {
      name: 'Jun 22',
      Online: 2390,
      Marketing: 3800,
    },
    {
      name: 'Page G',
      Online: 3490,
      Marketing: 4300,
    },
  ]
  return (
    <div className='card px-4 pb-4 sm:px-5'>
      <div className='my-3 flex h-8 items-center justify-between'>
        <h2 className='font-xl text-base tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-xl'>
          Sales Report
        </h2>
      </div>
      <div className=''>
        <ResponsiveContainer width='100%' height={350}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='Marketing'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='Online' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DemoReport
