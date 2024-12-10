import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'

const ImageSlider = ({image}) => {
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
  return(
    <section className="flex justify-center items-center w-full">
      <div className='w-full lg:px-10 lg:w-[70%] px-5 h-[20rem] sm:h-[30rem] my-[10rem]'>
        <h1 className='text-center mb-5 text-xl border-b border-hijauGelap text-hijauGelap pb-4 font-semibold'>Galery Kami</h1>
        <div style={{backgroundImage: `url(${image[mainSlide].url})`}} className='w-full h-full rounded-lg shadow-lg relative bg-cover bg-[center] flex justify-between items-center px-4'>
          <div className='text-white bg-black/50 cursor-pointer p-4 rounded-lg'>
            <BsChevronCompactLeft size={30} onClick={prevMainSlide} />
          </div>
           <div className='text-white bg-black/50 cursor-pointer p-4 rounded-lg'><BsChevronCompactRight size={30} onClick={nextMainSlide} />
           </div>
         </div>
      </div>
    </section>

  )
}
const BodyMain = ({image}) => {
  const [slidePendidikan, setSlidePendidikan] = useState('-translate-y-80 absolute')
  const [slideAlasan, setSlideAlasan] = useState('-translate-y-80 absolute')

  const slidePendidikanHandler = () => {
    const previousSlide = slidePendidikan === '-translate-y-80 absolute'
    previousSlide ? setSlidePendidikan('') : setSlidePendidikan('-translate-y-80 absolute')
  }
  const slideAlasanHandler = () => {
    const previousSlide = slideAlasan === '-translate-y-80 absolute'
    previousSlide ? setSlideAlasan('') : setSlideAlasan('-translate-y-80 absolute')
  }
  
  return (
    <>
      <section className='w-full lg:px-10 px-5 my-10 flex flex-col gap-10 md:flex-row'>
        <div className='w-full overflow-hidden relative cursor-pointer rounded' onClick={slidePendidikanHandler}>
          <div className='text-center py-4 bg-hijauGelap'>
            <p className='text-krem font-semibold text-lg border-b border-green-900 pb-4'>Pendidikan Berbasis Tradisional dan Praktis</p>
            <div className={`mt-2 ${slidePendidikan} text-left p-4`}>
              <h2 className='text-krem lg:text-lg'>Membentuk Generasi Islam yang cultural dan modern:</h2>
              <p className='text-krem lg:text-lg'>1. Pendidikan Agama Mendalam</p>
              <p className='text-krem lg:text-lg'>2. Fasilitas Asri dan nyaman</p>
             <p className='text-krem lg:text-lg'>3. Keterampilan Hidup dan keahlian modern</p>
             <p className='text-krem lg:text-lg'>4. Kegiatan Berdialog Dan Berpikir</p>
            </div>
          </div>
        </div>
        <div className='w-full overflow-hidden relative cursor-pointer rounded' onClick={slideAlasanHandler}>
          <div className='text-center py-4 bg-krem'>
            <p className='text-hijauGelap font-semibold text-lg border-b border-yellow-900 pb-4'>Kenapa Memilih Kami?</p>
            <div className={`mt-2 ${slideAlasan} text-left p-4`}>
              <h2 className='text-hijauGelap lg:text-lg'>1. Bermacam-Macam Kegiatan Ekstrakulikuler</h2>
              <p className='text-hijauGelap lg:text-lg'>2. Diajari Oleh Ustadz/Ustadzah Yang Berpengalaman</p>
              <p className='text-hijauGelap lg:text-lg'>3. Pelajaran Al-Qur'an dan Kitab Kuning Yang Mendalam</p>
             <p className='text-hijauGelap lg:text-lg'>4. Pengenalan Teknologi</p>
            </div>
          </div>
        </div>
      </section>
      <ImageSlider image={image} />
    </>
  )
}



export default BodyMain