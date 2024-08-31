import Header from '@/components/header'
import React from 'react'
type props={
  children:React.ReactNode
}
const DashBoardLayout = ({children}:props)=>{
  return (
    <>
        <Header />
        <main className='px-3 lg:px-14'>{children}</main>
    </>
  )
}

export default DashBoardLayout;
