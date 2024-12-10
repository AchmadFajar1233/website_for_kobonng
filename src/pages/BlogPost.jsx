import React from 'react'

const BlogPost = () => {
  return (
    <div className='w-full px-8 py-4'>
        <h1 className='text-center text-2xl'>Artikel Post Area</h1>
        <form action="#" method='Post' className='flex flex-col items-start'>
            {/* paragraf pertama */}
          <label htmlFor="title">Nama Judul</label>
          <input type="text" id='title' name='title' required className='mb-4 w-full border border-slate-400'placeholder='Masukan Judul Wajib Diisi' />
          <label htmlFor="paragraf_pertama">Section Pertama</label>
          <textarea name="paragraf_pertama" required id="paragraf_pertama" className='mb-4 w-full border border-slate-400' placeholder='Masukan Artikel Wajib Diisi' rows={10} cols={20}></textarea>
          <label htmlFor="image_paragraf_pertama">Gambar Untuk Paragraf Pertama</label>
          <input type="file" name='image_paragraf_pertama' id='image_paragraf_pertama' className='mb-4 '/>
            {/* paragraf kedua */}
          <label htmlFor="paragraf_kedua">Section Kedua</label>
          <textarea name="paragraf_kedua" required id="paragraf_kedua" className='mb-4 w-full border border-slate-400' placeholder='Masukan Artikel Wajib Diisi' rows={10} cols={20}></textarea>
          <label htmlFor="image_paragraf_kedua">Gambar Untuk Paragraf Pertama</label>
          <input type="file" name='image_paragraf_kedua' id='image_paragraf_kedua' className='mb-4 '/>
          <label htmlFor="simpan_di_beranda">Simpan Diberanda?</label>
          <input type="checkbox" className='mb-4 '/>
          <button className='w-full border border-slate-400' type='submit'>Post Artikel?</button>
        </form>
    </div>
  )
}

export default BlogPost