import React from 'react'
import HeaderLogo from './header-logo'

const header = () => {
  return (
    <header className='bg-gradient-to-b from-blue-700
    to-blue-500 px-4 py-8 lg:px-14 pb-36'>
        <div className='w-full flex items-center justify-between mb-14'>
            <div className='flex items-center lg:gap-x-16'>
                <HeaderLogo />
            </div>
        </div>
    </header>
  )
}

export default header