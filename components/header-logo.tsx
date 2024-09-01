import Link from "next/link";
import Image from "next/image";

import React from 'react'

const headerLogo = () => {
  return (
    <Link href="/">
        <div className='items-center hidden lg:flex'>
            <Image src="/logo.svg" height={30} width={30} alt="Logo" />
            <div className="flex flex-col ml-2.5">
              <p className="font-bold text-white text-2xl ml-2.5">
                FEIN!-ance
              </p>
              <p className="text-white text-xs ml-2.5">A Finance Platform</p>
            </div>
        </div>
    </Link>
  )
}

export default headerLogo