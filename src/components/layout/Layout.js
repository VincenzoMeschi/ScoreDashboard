import React from 'react'
import Header from '../header/Header'
const Layout = ({ children }) => {
  return (
    <div className={`min-h-100vh flex grow bg-slate-50 dark:bg-navy-900`}>
      {/* Header */}
      <nav className='header print:hidden'>
        <Header />
      </nav>

      {/* Main Content Wrapper */}
      <main className='main-content p-8 space-y-3 w-full'>{children}</main>

      {/* Footer */}
    </div>
  )
}

export default Layout
