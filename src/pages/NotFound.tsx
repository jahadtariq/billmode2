import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='h-screen px-24 py-2 grid grid-cols-2 gap-20'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-0 items-start'>
                <h1 className='max-w-[300px] md:max-w-[400px] lg:max-w-[700px] text-[45px] md:text-[60px] lg:text-[106px] font-normal uppercase text-center drop-shadow-xl h-full tracking-widest'>404</h1>
                <h3 className='max-w-[300px] md:max-w-[400px] lg:max-w-[700px] text-[45px] md:text-[60px] lg:text-[66px] font-bold uppercase text-center drop-shadow-xl h-full '>Go Home,</h3>
                <h3 className='max-w-[300px] md:max-w-[400px] lg:max-w-[700px] text-[45px] md:text-[60px] lg:text-[66px] font-bold uppercase text-start drop-shadow-xl h-full '>You're Drunk !</h3>
            </div>
        <Link to={'/'} className='px-[64px] py-[16px] bg-[#7254ED] mt-12 rounded-3xl text-[18px] font-bold uppercase'> Back to home</Link>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src='/404.svg' alt=''/>
        </div>
    </section>
  )
}

export default NotFound;