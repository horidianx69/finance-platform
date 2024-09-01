"use client" 
// rendered server side but not a server component it became a client-side componenet

// in Next we write in server componenets and can fetch directly from database and we can make parts client side to use hooks.
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'


import NavButton from '@/components/navButton'

import {useMedia} from 'react-use'
import {
    Sheet,
    SheetContent,
    SheetTrigger
}from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'


const routes = [
    {
        href:'/',
        label:"Home"
    },
    {
        href:'/transactions',
        label:"Transactions"
    },
    {
        href:'/accounts',
        label:"Accounts"
    },
    {
        href:'/categories',
        label:"Categories"
    },
    {
        href:"/settings",
        label:"Settings"
    },
]
const navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname =usePathname();
    const isMobile= useMedia('(max-width: 1024px)',false); // false for hydration, assuming the veiw is not  mobile

    const onClick = (href:string)=>{
        router.push(href);
        setIsOpen(false);
    }

    if(isMobile){
        return(
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                    <Button
                    variant="outline"
                    size="sm"
                    className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
                    onClick={()=>setIsOpen(!isOpen)}
                    >
                      <Menu  className="size-4"/>  
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className='px-2'>
                    <nav className='flex flex-col gap-y-2 pt-6'>
                        {routes.map((route)=>(
                            <Button
                                key ={route.href}
                                variant={route.href === pathname ? "secondary" : "ghost"}
                                onClick={()=>onClick(route.href)}
                                className='w-full justify-start'
                            >
                                {route.label}
                            </Button>
                        ))}
                    </nav> 
                </SheetContent>
            </Sheet>
        )
    }

  return (
    <nav className='items-center hidden lg:flex gap-x-2 overflow-x-auto'>
       {routes.map((route)=>(
        <NavButton 
           key={route.href} 
            href={route.href}
            label={route.label}
            isActive={pathname === route.href}
        />
       ))} 
    </nav>
  )
}

export default navigation