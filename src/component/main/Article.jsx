import React from 'react'
import { backgroundHeader3, backgroundHeader5, backgroundHeader11, backgroundHeader7 } from '../../assets'



const Article = () => {
  const datas = [
    {
        "title": "Pesantren, Sejarah Dan Edukasi Di Indonesia",
        "date": "juli 8 2020",
        "image": backgroundHeader3
    },
    {
        "title": "Fundamental Nahwu & Shorof",
        "date": "juni 10 2024",
        "image": backgroundHeader5
    },
    {
        "title": "Apa Itu Alat Dan Kenapa Mesti Di Pelajari",
        "date": "agustus 18-2024",
        "image": backgroundHeader11
    },
    {
        "title": "Pandangan Nasionalimse Dalam Islam",
        "date":"agustus-20-2024",
        "image":backgroundHeader7
    }
]  
  return (
    <section className='w-full p-6 lg:px-10 my-[10rem] bg-slate-200'>
        <h1 className='text-center text-xl'>Artikel Pilihan</h1>
        <hr className='my-4'/>
        <div className='w-full grid grid-cols-2 grid-rows-2 h-[35rem] sm:h-[45rem] sm:grid-cols-3 gap-4'>
            {datas.map((data, index) => {
            return(
                <div key={index} className='border border-slate-400 flex flex-col overflow-hidden rounded-md shadow-lg gap-4'>
                <div className='w-full h-[50%]'>
                    <img src={data.image}  alt="contoh" className='w-full h-full object-cover'/>
                </div>
                <div className='px-4 flex flex-col'>
                    <h3 className='font-semibold truncate text-[#2b501e]'>{data.title}</h3>
                    <span className='text-xs mb-3 text-[#2b501e]'>{ data.date}</span>
                    <a href="#" className='hover:text-hijauGelap text-sm text-[#2b501e]'>Baca Selengkapnya...</a>
                </div>
            </div>
            )
            })}
        </div>

    </section>
  )
}

export default Article