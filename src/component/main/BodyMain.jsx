import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'

const BodyMain = ({image}) => {
    const [mainSlide, setMainSLide] = useState(0)
    const prevMainSlide = () => {
        const isFirtsSlide = mainSlide === 0
        const newIndex = isFirtsSlide ? image.length -1 : mainSlide -1
        setMainSLide(newIndex)
      }
      const nextMainSlide = () => {
        const isLastSLide = mainSlide === image.length -1
        const newIndex = isLastSLide ? 0 : mainSlide + 1
        setMainSLide(newIndex)
      }

  return (
    <>
    <section className='w-full px-10 grid grid-rows-3 grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2'>
      <div style={{backgroundImage: `url(${image[mainSlide].url})`}} className='lg:row-span-2 rounded-lg shadow-lg relative bg-cover bg-[center] flex justify-between items-center px-4'>
            <div className='text-white bg-black/50 cursor-pointer p-4 rounded-lg'>
              <BsChevronCompactLeft size={30} onClick={prevMainSlide} />
            </div>
            <div className='text-white bg-black/50 cursor-pointer p-4 rounded-lg'><BsChevronCompactRight size={30} onClick={nextMainSlide} />
            </div>
      </div> 
      <div className='lg:row-span-1 p-8 bg-krem rounded-md shadow-md w-full flex flex-col justify-center'>
            <h3 className='font-bold text-hijauGelap text-xl lg:text-2xl uppercase'>I. Pendidikan Berbasis Tradisional Dan Praktis</h3>
            <h2 className='font-bold text-hijauGelap my-5 uppercase lg:text-xl'>Membentuk Generasi Islam yang cultural dan modern:</h2>
             <p className='text-hijauGelap font-semibold lg:text-lg'>1. Pendidikan Agama Mendalam</p>
             <p className='text-hijauGelap font-semibold lg:text-lg'>2. Fasilitas Asri dan nyaman</p>
             <p className='text-hijauGelap font-semibold lg:text-lg'>3. Keterampilan Hidup dan keahlian modern</p>
             <p className='text-hijauGelap font-semibold lg:text-lg'>4. Kegiatan Berdialog Dan Berpikir</p>
      </div>
      <div>
      <div className='lg:mt-7 lg:row-span-1 p-8 bg-hijauGelap rounded-md shadow-md w-full flex flex-col justify-center pb-[8rem]'>
            <h3 className='font-bold text-krem text-xl lg:text-2xl uppercase mb-4'>II. Kenapa Memilih Kami?</h3>
             <p className='text-krem font-semibold lg:text-lg'>1. Bermacam-Macam Kegiatan Ekstrakulikuler</p>
             <p className='text-krem font-semibold lg:text-lg'>2. Diajari Oleh Ustadz/Ustadzah Yang Berpengalaman</p>
             <p className='text-krem font-semibold lg:text-lg'>3. Pelajaran Al-Qur'an dan Kitab Kuning Yang Mendalam</p>
             <p className='text-krem font-semibold lg:text-lg'>4. Pengenalan Teknologi</p>
            </div>
      </div>
    </section>    
    </>
  )
}

export default BodyMain