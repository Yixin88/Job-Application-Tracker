import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between items-center gap-5 bg-slate-500 h-20 text-white px-5'>
      <Link href={'/'}><FontAwesomeIcon icon={ faCompass } size='2xl'/></Link>
      <h1 className='flex-1 text-[1.7rem]'><Link href={'/'}>Job Application Tracker</Link></h1>
      <button className='text-xl py-2 px-3 rounded-md border transition duration-300 hover:bg-slate-600 hover:ease-in-out hidden sm:block'>Login</button>
      <button className='text-xl py-2 px-3 rounded-md border transition duration-300 hover:bg-slate-600 hover:ease-in-out hidden sm:block'>Sign Up</button>
    </header>
  )
}

export default Header