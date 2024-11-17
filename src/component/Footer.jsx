import React from 'react'
import facebook from '../assets/svg/facebook.svg'
import instagram from '../assets/svg/instagram.svg'
import whatsApp from '../assets/svg/whatsapp.svg'

const Footer = () => {
  return (
    <footer className='min-h-[10rem] w-screen border bg-hijauGelap'>
      <div className='w-full h-full flex flex-col justify-center gap-3 items-center'>
        <h2 className='text-green-950 font-bold uppercase'>Kontak kami:</h2>
        <div className='flex gap-4'>
          <a href="">
            <img src={whatsApp} alt="" width={'20'} height= {'20'} />
          </a>
          <a href="">
          <img src={facebook} alt="" width={'20'} height={'20'} />
          </a>
          <a href="">
          <img src={instagram} alt="" width={'20'} height={'20'} />
          </a>
        </div>
        <div>
          <p className='font-semibold text-green-950'>copyright: 2024 | Pondok Pesantren Nurul Hikmah</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer