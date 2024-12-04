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
    <section className='w-full p-6 lg:px-10'>
        <h1 className='text-center text-xl'>Artikel Pilihan</h1>
        <hr className='my-4'/>
        <div className='flex flex-col justify-center gap-4 md:flex-row md:grid md:grid-cols-2 md:grid-rows-2'>
            {datas.map((data, index) =>{
                return(
                    <div key={index} className='cursor-pointer lg:h-[35rem] h-[25rem] border rounded-md overflow-hidden shadow-lg flex flex-col'>
                        <div className='w-full h-[50%] border-b-2 overflow-hidden'>
                            <img src={data.image} alt="" className='object-cover object-bottom w-full h-full' />
                        </div>
                        <div className='w-full p-8 flex-col flex justify-between h-[40%]'>
                            <div>
                                <h1 className='text-xl lg:text-3xl lg:mb-1'>{data.title}</h1>
                                <span className='text-sm'>{data.date}</span>
                            </div>
                            <a href="#" className='hover:text-blue-800'>Baca Selengkapnya...</a>
                        </div> 
                    </div>
                )
            })}
        </div>

    </section>
  )
}

export default Article