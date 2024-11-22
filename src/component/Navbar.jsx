import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import backroundHeader from '../assets/img/backroundHeaderContoh.jpg'


const Navbar = () => {
  const [hamburger, setHamburger] = useState('w-10 h-[3px] bg-hijauGelap my-2')
  const [hamburger2, setHamburger2] = useState('w-8 h-[3px] bg-hijauGelap my-2')
  const [IsActive, setIsActive] = useState(false)
  const [navActive, setNavActive] = useState('-translate-x-full')

  const hamburgerActive = () =>{
    setIsActive((previousState) => {
      const newState = !previousState
      if(newState){
        setHamburger('w-10 h-[3px] bg-hijauGelap my-3 rotate-[23deg] origin-top-left transition-all duration-200 ease-in')
        setHamburger2('w-10 h-[3px] bg-hijauGelap my-3 -rotate-[23deg] origin-bottom-left transition-all duration-200 ease-in')
        setNavActive('translate-x-0 transition-all duration-200 ease-in')
      } else{
        setHamburger('w-10 h-[3px] bg-hijauGelap my-2 transition-all duration-200 ease-in')
        setHamburger2('w-8 h-[3px] bg-hijauGelap my-2 transition-all duration-200 ease-in')
        setNavActive('-translate-x-full transition-all duration-200 ease-in')
      }
      return newState
    })
  }
  return (
    <>
    <header className='w-screen border-b relative bg-krem mb-10'>
        <nav className='px-6 py-12 flex justify-between items-center lg:px-16'>
            <div id='logo' className='flex gap-4 justify-center items-center'>
                <img src={logo} alt="" className='w-16 h-16'/>
                <div>
                  <p className='-mb-1 uppercase text-hijauGelap'>Pondok Pesantren</p>
                  <p className='uppercase font-bold text-hijauGelap'>Nurul Hikmah Assalafy</p>
                </div>
            </div>
            <div className='cursor-pointer z-30 lg:hidden' onClick={hamburgerActive}>
              <div className={hamburger}></div>
              <div className={hamburger2}></div>
            </div>
            <div className={`absolute top-0 left-0 border w-screen h-screen bg-[#f5d44fda] py-28 ${navActive} lg:hidden z-20`}>
                <ul className='flex flex-col justify-center text-center'>
                  <li className='text-hijauGelap border-y pt-1 border-hijauGelap uppercase py-2 transition-all ease-in cursor-pointer duration-200 hover:bg-hijauGelap hover:text-krem'><a href="">Beranda</a></li>
                  <li className='text-hijauGelap border-b border-hijauGelap uppercase py-2 transition-all ease-in cursor-pointer duration-200 hover:bg-hijauGelap hover:text-krem'><a href="">Profil</a></li>
                  <li className='text-hijauGelap border-b border-hijauGelap uppercase py-2 transition-all ease-in cursor-pointer duration-200 hover:bg-hijauGelap hover:text-krem'><a href="">Program</a></li>
                  <li className='text-hijauGelap border-b border-hijauGelap uppercase py-2 transition-all ease-in cursor-pointer duration-200 hover:bg-hijauGelap hover:text-krem'><a href="">Pendaftaran</a></li>
                </ul>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex gap-4 justify-center text-center'>
                  <li className='text-hijauGelap border-hijauGelap uppercase hover:text-green-900'><a href="">Beranda</a></li>
                  <li className='text-hijauGelap border-hijauGelap uppercase hover:text-green-900'><a href="">Profil</a></li>
                  <li className='text-hijauGelap border-hijauGelap uppercase hover:text-green-900'><a href="">Program</a></li>
                  <li className='text-hijauGelap border-hijauGelap uppercase hover:text-green-900'><a href="">Pendaftaran</a></li>
                </ul>
            </div>
        </nav>
        <div className='w-full h-[20rem] relative md:h-[30rem]'>
          <div className='absolute right-0 bottom-0 top-0 left-0 bg-[#3d3d3d81] z-10 flex flex-col justify-center items-center'>
            <h1 className='text-slate-50 uppercase font-semibold text-4xl lg:text-5xl'>Selamat Datang</h1>
            <p className='text-slate-50 mb-4 lg:text-lg'>di website resmi:</p>
            <p className='font-semibold text-slate-50 md:text-lg'>PPNH Assalafy</p>
            <p className='uppercase font-semibold text-slate-50 text-xl lg:text-2xl'>Pondok Pesantren Nurul Hikmah</p>
            <p className='uppercase font-semibold text-slate-50 text-xl lg:text-2xl'>Assalafy</p>
          </div>
            <img src={backroundHeader} alt=""  className='w-full h-full absolute top-0 bottom-0 left-0 right-0 md:object-cover md:object-center'/>
        </div>
    </header>
    </>
  )
}

export default Navbar