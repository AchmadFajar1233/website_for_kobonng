import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router'
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navigation = [
    {name: 'Beranda', href: '/'},
    {name: 'Profle', href: '/profile'},
    {name: 'Pendaftaran', href: '/pendaftaran'},
    {name: 'Blog', href: '/blog'}
  ]
  const [isHamburgerActive, setIsHamburgerActive] = useState(false)
  return (
    <>
    <header className='w-screen relative'>
        <nav className='px-6 py-6 flex justify-between items-center lg:px-16 w-full bg-krem z-40 fixed'>
            <div id='logo' className='flex justify-center items-center'>
              <Link to={'/'}>
                <img src={logo} alt="" className='w-16 h-16'/>
              </Link>
                <div className='ml-4'>
                  <p className='-mb-1 text-hijauGelap'>Pondok Pesantren</p>
                  <p className='uppercase font-bold text-hijauGelap'>Nurul Hikmah Assalafy</p>
                </div>
            </div>
            <div>
              <ul className='flex gap-4'>
                {navigation.map((item) =>{
                  return(
                    <li key={item.name}>
                      <Link to={item.href} className='hidden lg:block text-hijauGelap hover:text-[#6aad42]'>
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='text-hijauGelap cursor-pointer lg:hidden relative' onClick={() => setIsHamburgerActive(!isHamburgerActive)}>
              {isHamburgerActive ? 
              <>
              <IoMdClose size={30}/> 
              <div className='absolute -right-2 bg-white rounded-md shadow-md w-36'>
                <ul className='p-2'>
                  {navigation.map((item, index) => {
                    return(
                      <li key={index}><Link to={item.href} className='p-2 block hover:bg-gray-100'>{item.name}</Link></li>
                    )
                  })}
                </ul>
              </div>
              </>
              : 
              <CgMenuRight size={30} />}
              
              
            </div>
            
        </nav>
    </header>
    </>
  )
}

export default Navbar