import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import backgroundHeader1 from '../assets/img/fotoSesi6.jpg'
import backgroundHeader2 from '../assets/img/fotoSesi2.jpg'
import backgroundHeader3 from '../assets/img/fotoSesi3.jpg'
import backgroundHeader4 from '../assets/img/fotoSesi4.jpg'
import backgroundHeader5 from '../assets/img/fotoSesi5.jpg'

const Main = () => {
  const data = [
    {url: backgroundHeader1},
    {url: backgroundHeader2},
    {url: backgroundHeader3},
    {url: backgroundHeader4},
    {url: backgroundHeader5},
  ]
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
    <div className='max-w-[screen] w-full h-[30rem] lg:h-[35rem] relative'>
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

    </div>
    <div className='w-full my-[10rem] px-10 min-h-[25rem]'>
        <div className='text-center mb-[10rem]'>
            <h1 className='text-2xl'>وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ</h1>
            <p className='mt-4'><i>Artinya: “Barang siapa yang menempuh jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan menuju surga.”.</i></p>
            <p className='mt-4'>(H.R Muslim)</p>
        </div>
        <div className='flex flex-col mt-10 gap-10 md:flex-row'>
          <div className='w-full p-6 rounded-lg bg-krem shadow-md'>
             <h2 className='text-xl font-bold text-hijauGelap'>Visi Kami:</h2>
             <p className='text-hijauGelap font-semibold'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat laboriosam assumenda exercitationem! Earum odit recusandae, quos maiores magnam aspernatur excepturi?"</p>
          </div>
          <div className='w-full p-6 rounded-lg bg-krem shadow-md'>
             <h2 className='text-xl font-bold text-hijauGelap'>Misi Kami:</h2>
             <ul className=''>
              <li><p className='text-hijauGelap font-semibold'><span className='font-bold'>-</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempore.</p></li>
              <li><p className='text-hijauGelap font-semibold'><span className='font-bold'>-</span> Lorem, ipsum dolor sit amet consectetur adipisicing..</p></li>
              <li><p className='text-hijauGelap font-semibold'><span className='font-bold'>-</span> Lorem ipsum dolor sit amet consecture.</p></li>
              <li><p className='text-hijauGelap font-semibold'><span className='font-bold'>-</span> Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>
             </ul>
          </div>
        </div>
    </div>
    </>
  )
}

export default Main