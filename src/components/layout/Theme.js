import React from 'react'
import useTheme from '../../hooks/useTheme'

const Theme = ({ children }) => {
  const isDark = useTheme()
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  return <>{children}</>
}

export default Theme
