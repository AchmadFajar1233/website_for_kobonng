import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import dataComentar from './datComm.json'

const Commentar = () => {
  const [slide, setSlide] = useState(0)
  const prevSLide = () => {
    const isFirtsSlide = slide === 0
    const newIndex = isFirtsSlide ? dataComentar.length -1 : slide -1
    setSlide(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = slide === dataComentar.length -1
    const newIndex = isLastSlide ? 0 : slide + 1
    setSlide(newIndex)
  }
  return (
    <>
    <section className='my-[10rem] px-6 py-8 w-full bg-slate-200 relative lg:flex flex-col justify-center items-center'>
            <h2 className='mb-8 text-center text-xl font-semibold'>Ini Kata Mereka:</h2>
            <div className='lg:w-[40%] w-full border border-slate-300 min-h-[20rem] rounded-xl shadow-xl px-10 py-4 flex flex-col justify-around'>
              <p>{dataComentar[slide].name}</p>
              <p className='text-lg font-semibold italic'>"{dataComentar[slide].commentar}"</p>
              <p>{dataComentar[slide].date}</p>
              <div className='absolute w-full h-full left-0 flex justify-between items-center'>
                <div onClick={prevSLide} className='cursor-pointer p-4 bg-black/50 active:bg-black/70 transition-colors duration-200 ease-in-out text-white rounded-xl'>
                  <BsChevronCompactLeft size={30} />
                </div>
                <div onClick={nextSlide} className='cursor-pointer p-4 bg-black/50 active:bg-black/70 transition-colors duration-200 ease-in-out text-white rounded-xl'>
                  <BsChevronCompactRight size={30} />
                </div>
              </div>
            </div>
          
    </section>
    </>
  )
}

export default Commentar