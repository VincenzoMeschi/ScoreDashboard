import React from 'react'
import HunterLogo from './../../assets/images/engaged/hunter.png'
import HighRiskLogo from './../../assets/images/engaged/heigh-risk.png'
import DefenderLogo from './../../assets/images/engaged/defender.png'
import PacifistLogo from './../../assets/images/engaged/pacifist.png'
import VulnerableLogo from './../../assets/images/engaged/vulnerable.png'

const SecurityCultureStatus = ({ score }) => {
  const [logo, setLogo] = React.useState(HighRiskLogo)

  React.useEffect(() => {
    if (score >= 90) {
      setLogo(HunterLogo)
    } else if (score >= 70 && score < 90) {
      setLogo(DefenderLogo)
    } else if (score >= 50 && score < 70) {
      setLogo(PacifistLogo)
    } else if (score >= 25 && score < 50) {
      setLogo(VulnerableLogo)
    } else {
      setLogo(HighRiskLogo)
    }
  }, [score, setLogo])

  return (
    <>
      <div>
        <h2 className='font-medium text-center tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base'>
          Security Culture Status
        </h2>
      </div>
      <div className='pt-3 mx-auto'>
        <img id='curture_image' className='w-42 h-42' src={logo} alt='Hunter' />
      </div>
    </>
  )
}

export default SecurityCultureStatus
