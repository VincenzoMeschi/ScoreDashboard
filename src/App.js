import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Theme from './components/layout/Theme'
import CompanyPage from './pages/CompanyPage'
import EmployeePage from './pages/EmployeePage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/company/:id' element={<CompanyPage />} />
          <Route path='/employee/:id' element={<EmployeePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Theme>
  )
}

export default App
