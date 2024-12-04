import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'

const HeaderMain = ({data}) => {
    const [slide, setSlide] = useState(0)
    const prevSLide = () => {
        const isFirtsSlide = slide === 0
        const newIndex = isFirtsSlide ? data.length -1 : slide -1
        setSlide(newIndex)
      }
      const nextSlide = () => {
        const isLastSlide = slide === data.length -1
        const newIndex = isLastSlide ? 0 : slide + 1
        setSlide(newIndex)
      }
  return (
    <>
    <section className='max-w-[screen] w-full h-[30rem] lg:h-[35rem] relative mt-[6rem]'>
      <div style={{backgroundImage: `url(${data[slide].url})`}} className='w-full h-full bg-cover bg-center'>
      </div>
      <div className='absolute top-0 w-full h-full flex justify-between items-center'>
        <div className='active:bg-black/80 transition-all duration-200 text-white bg-black/50 p-3 cursor-pointer rounded-xl z-10'>
            <BsChevronCompactLeft onClick={prevSLide} size={40} />
        </div>
        <div className='active:bg-black/80 transition-all duration-200 text-white bg-black/50 p-3 cursor-pointer rounded-xl z-10'>
            <BsChevronCompactRight onClick={nextSlide} size={40} />
        </div>
      </div>
      <div className='w-full h-full absolute top-0 bottom-0 bg-black/60 flex flex-col justify-center items-center lg:items-start px-18 lg:px-28'>
        <div className='text-center lg:text-left'>
          <h2><i className='text-xl text-slate-200 font-semibold lg:text-4xl'>"Menanamkan Ilmu, Membimbing Iman,<br></br>dan Mengukir Masa Depan."</i></h2>
          <p className='text-slate-200 mt-4 font-bold lg:text-xl'>Pendaftaran Siswa Baru <br></br>
          Yayasan Pondok Pesantren Nurul Hikmah<br />
          Assalafy
          </p>
        </div>
        <a href='#' className='text-hijauGelap text-sm font-bold rounded-md bg-krem mt-6 px-8 py-3 cursor-pointer uppercase hover:bg-hijauGelap hover:text-krem transition-colors duration-200 ease-out lg:text-xl'>Info Pendaftaran?</a>
      </div>
    </section>
    <section className='w-full my-[10rem] lg:px-10 px-5 min-h-[25rem]'>
        <div className='text-center mb-[10rem] border border-slate-200 p-16 rounded-md shadow-md'>
            <h1 className='text-2xl'>وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ</h1>
            <p className='mt-4'><i>Artinya: “Barang siapa yang menempuh jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan menuju surga.”.</i></p>
            <p className='mt-4'>(H.R Muslim)</p>
        </div>
    </section>
    </>
  )
}

export default HeaderMain