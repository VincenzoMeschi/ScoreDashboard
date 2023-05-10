import React from 'react'
import ActivityLayout from '../components/dashboard/ActivityLayout'
import CultureScore from '../components/dashboard/CultureScore'
import RiskScore from '../components/dashboard/RiskScore'
import SecurityCultureStatus from '../components/dashboard/SecurityCultureStatus'
import SecurityCultureTimeline from '../components/dashboard/SecurityCultureTimeline'
import TopEmployeesList from '../components/dashboard/TopEmployeesList'
import Layout from '../components/layout/Layout'
import { companiesDemo, employeesDemo } from '../utils/data'
import SimulationCount from '../components/dashboard/SimulationCount'
import ActivityProgressBar from '../components/dashboard/ActivityProgressBar'
import ActivityStatus from '../components/dashboard/ActivityStatus'
import { useLocation, useParams } from 'react-router-dom'
import { getScoresFromEmployee } from '../utils/engagedSecurity'
import TopDepartmentLIst from './../components/dashboard/TopDepartmentLIst'
import { departmentsDemo } from './../utils/data'

const CompanyPage = () => {
  let { id } = useParams()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const departmentId = queryParams.get('department')

  const departments = departmentsDemo
  const employees = employeesDemo
    .filter((employee) =>
      departmentId
        ? employee?.company === id && employee?.department === departmentId
        : employee?.company === id
    )
    .sort((a, b) => a.scores.cultureScore - b.scores.cultureScore)

  const {
    cultureScore,
    riskScore,
    behaviorScore,
    knowledgeScore,
    engagementScore,
  } = getScoresFromEmployee(employees)

  return (
    <Layout>
      {/* Culture Status | Culture Score | Risk Score | Security Culture Timeline | Top Companies | Top Employees */}
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
        <div className='lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-3'>
          <div className='card rounded-lg p-4 text-white'>
            <SecurityCultureStatus score={cultureScore} />
          </div>

          <div className='card rounded-lg p-4 text-white'>
            <CultureScore score={cultureScore} />
          </div>

          <div className='card rounded-lg p-4 text-white'>
            <RiskScore score={100 - cultureScore} />
          </div>

          <div className='lg:col-span-2 card px-4 pb-4'>
            <SecurityCultureTimeline />
          </div>

          <div className='card rounded-lg p-4 text-white space-y-4'>
            <TopDepartmentLIst
              departments={departments.slice(0, 5)}
              selected={departmentId}
            />
          </div>
        </div>
        <div className='card rounded-lg p-4 text-white space-y-4'>
          <TopEmployeesList employees={employees.slice(0, 10)} />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        {/* Phishing | Reported Simulation| Breaches Simulation | Reported Real Fishing  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <SimulationCount title='Total Phishing Simulations' count={20} />
          <SimulationCount title='Total Reported Simulations' count={30} />
          <SimulationCount title='Total Breaches Simulations' count={25} />
          <SimulationCount title='Total Reported Real Phishing' count={30} />
          <SimulationCount title='Total Reported Simulations' count={10} />
          <SimulationCount title='Total Breaches Simulations' count={30} />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          {/* Behavior | KNOLEDGE | ENGAGEMENT - PPROGRESSBAR  */}
          <div className='grid grid-cols-1 gap-3'>
            <ActivityProgressBar title='Behavior' progress={behaviorScore} />
            <ActivityProgressBar title='Knowledge' progress={knowledgeScore} />
            <ActivityProgressBar
              title='Engagement'
              progress={engagementScore}
            />
          </div>

          {/*  MFA | PASSWORD | VPN | SIFT- STATUS  */}
          <div className='grid grid-cols-1 gap-3'>
            <ActivityStatus title='MFA' status='UNSECURE' />
            <ActivityStatus title='PASSWORD' status='SECURE' />
            <ActivityStatus title='SIFT' status='SECURE' />
          </div>
        </div>
      </div>

      {/*  Activity Layout*/}
      <div className='grid grid-cols-1 gap-3'>
        <ActivityLayout />
      </div>
    </Layout>
  )
}

export default CompanyPage
