import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../images/logoV3.png'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './ModeToggle'

function Navbar() {
  return (
    <div>
        <header className=' h-[85px] text-white w-full'>
        <nav className='w-full relative flex items-center
           justify-between max-w-2xl mx-auto px-4'>
       
         <Link href="#" >
            <Image src={logo}
             alt='logo'
             width={142}
             height={62}
             />
         </Link>

           <div>
            <ul className='flex items-center justify-between gap-12'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>
                    <Button>Login</Button>
                </li>
          
            </ul>
           </div>
         </nav>
        </header>
        
    </div>
  )
}

export default Navbar