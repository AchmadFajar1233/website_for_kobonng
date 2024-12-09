import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const SWiper = ({data}) => {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    loop
    autoplay
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {data.map((data) => {
      return(
        <SwiperSlide key={data.url}>
          <img 
            src={data.url}
            alt=""
            className='w-full md:h-[30rem] object-cover object-center' />
        </SwiperSlide>
      )
    })} 
  </Swiper>
  )
}
const HeaderMain = ({data}) => {
  return (
    <>
    <section className="mt-[7rem]">
      <div className='w-full relative'>
        <SWiper data={data} />
      </div>
    </section>
    <section className='w-full my-[7rem] lg:px-10 px-5 min-h-[25rem]'>
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