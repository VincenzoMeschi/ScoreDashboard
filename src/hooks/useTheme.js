import React from 'react'
import { useSelector } from 'react-redux'

const useTheme = () => {
  const { theme } = useSelector((state) => state.global)
  if (theme === 'dark') {
    return true
  } else {
    return true
  }
}

export default useTheme
