import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'

const Navbar = () => {
    const location = false
  return (
    <div className='bg-white py-3 shadow-md'>

        <div className='max-w-6xl mx-auto flex justify-between items-center'>
            {/* Logo Section */}

        <div className='flex gap-7 items-center'>

            <Link to={'/'}>
            <h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>S</span>ane<span className='text-blue-500 font-serif'>S</span>tore</h1>
            </Link>

            <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
                <MapPin className='text-red-500'/>
                <span className='font-semibold '>{location ? <div></div>:"Add Address"}</span>
                <FaCaretDown />

            </div>

        </div>
        <div>
            {/* Menu Section */}

            <nav className='flex gap-7 items-center'>
                <ul className='flex gap-7 items-center text-xl font-semibold' >
                    <NavLink to={'/'} className={({isActive})=> `${isActive ? "border-b-2 transition-all border-red-500": "text-black"} cursor-pointer`}><li>Home</li></NavLink>

                    <NavLink to={'/products'} className={({isActive})=> `${isActive ? "border-b-2 transition-all border-red-500": "text-black"} cursor-pointer`}><li>Products</li></NavLink>

                    <NavLink to={'/about'} className={({isActive})=> `${isActive ? "border-b-2 transition-all border-red-500": "text-black"} cursor-pointer`}><li>About</li></NavLink>

                    <NavLink to={'/contact'} className={({isActive})=> `${isActive ? "border-b-2 transition-all border-red-500": "text-black"} cursor-pointer`}><li>Contact</li></NavLink> 
                </ul>

                <Link to={'/cart'} className='relative'>

                <IoCartOutline className='h-7 w-7' />
                <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>0</span>
                
                </Link>

                <Link to="/login" className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'>
                        Sign In

                    </Link>
            
            </nav>
        </div>
        </div>
    </div>
  )
}

export default Navbar
