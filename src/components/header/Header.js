import React from 'react'
import { useDispatch } from 'react-redux'
import { setTheme } from '../../features/global/globalSlice'
import useTheme from '../../hooks/useTheme'
import HeaderLogo from './../../assets/images/engaged/logos/Engaged_Logo.svg'
import { Link, useLocation, useParams } from 'react-router-dom'
import { companiesDemo, data, employeesDemo } from './../../utils/data'

const Header = () => {
  let location = useLocation()
  let { id } = useParams()
  const [logo, setLogo] = React.useState(HeaderLogo)
  const [title, setTitle] = React.useState('ENGAGED Security')
  const [back, setBack] = React.useState(null)

  const dispatch = useDispatch()
  const isDark = useTheme()

  const darkModeToggler = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light')
      dispatch(setTheme('light'))
    } else {
      localStorage.setItem('theme', 'dark')
      dispatch(setTheme('dark'))
    }
  }

  function getCompanyAvatar(employeeCompany) {
    let company = companiesDemo.find((item) => item._id === employeeCompany)
    return company?.logo
  }

  React.useEffect(() => {
    if (location?.pathname.split('/').includes('company')) {
      let selectedCompany = companiesDemo.find((item) => item._id === id)
      setLogo(selectedCompany?.logo)
      setTitle(selectedCompany?.name)
      setBack(true)
    }

    if (location?.pathname.split('/').includes('employee')) {
      let selectedEmployee = employeesDemo.find((item) => item._id === id)
      setLogo(getCompanyAvatar(selectedEmployee.company))
      setTitle(selectedEmployee?.name)
      setBack(true)
    }
  }, [id])

  return (
    <div className='header-container relative flex w-full bg-white dark:bg-[#1E1F23] print:hidden'>
      {/* Header Items */}
      <div className='flex w-full items-center justify-between'>
        {/* Left: Sidebar Toggle Button */}
        <Link to='/' className='flex items-center space-x-4'>
          <div>
            <img className='h-10 w-10 rounded' src={logo} alt='logo' />
          </div>
          <h1
            className='text-2xl font-bold tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 text-center'
            id='header_name'
          >
            {title}
          </h1>
        </Link>

        {/* Searchbar */}
        <div className='w-full max-w-md'>
          <label className='relative flex'>
            <input
              className='form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
              placeholder='Search here...'
              type='text'
            />
            <div className='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 transition-colors duration-200'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z'></path>
              </svg>
            </div>
          </label>
        </div>

        {/* Right: Header buttons */}
        <div className='-mr-1.5 flex items-center space-x-2'>
          {back && (
            <Link
              to='/'
              class='btn border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90 dark:border-info dark:text-info-light dark:hover:bg-info dark:hover:text-white dark:focus:bg-info dark:focus:text-white dark:active:bg-info/90'
            >
              Back
            </Link>
          )}
          {/* Dark Mode Toggle */}
          <button className='btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'>
            {isDark ? (
              <svg
                onClick={darkModeToggler}
                className='h-6 w-6 text-amber-400 transition-transform duration-200 ease-out absolute origin-top'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z' />
              </svg>
            ) : (
              <svg
                onClick={darkModeToggler}
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-amber-400 transition-transform duration-200 ease-out absolute origin-top'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
