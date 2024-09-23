import React from 'react'

const Meeting = () => {
  return (
    <section className='h-screen px-24 py-12 flex flex-col justify-center items-start gap-6'>
        <div className='w-full h-contain flex flex-col justify-start items-start mb-12'>
            <h1 className='font-bold text-[56px] uppercase'>Book your Appointment now</h1>
            <h3 className='font-normal text-[20px]'>So our team can reach to you on time</h3>
        </div>
        <div className='grid grid-cols-2 gap-20 w-full items-start justify-start'>
            <div className='flex flex-col gap-6'>
                <div className="flex flex-col gap-2 w-full">
                <p className="text-[16px] font-normal">First Name</p>
                <input type="text" className="px-3 py-4 rounded-[12px] bg-blue border-none text-[16px] font-light placeholder:text-[16px] placeholder:text-white/60 placeholder:font-light" placeholder="Enter First Name"/>
                </div>
                <div className="flex flex-col gap-2 w-full">
                <p className="text-[16px] font-normal">Email</p>
                <input type="text" className="px-3 py-4 rounded-[12px] bg-blue border-none text-[16px] font-light placeholder:text-[16px] placeholder:text-white/60 placeholder:font-light" placeholder="Enter Email"/>
                </div>
                <div className="flex flex-col gap-2 w-full">
                <p className="text-[16px] font-normal">Phone Number</p>
                <input type="text" className="px-3 py-4 rounded-[12px] bg-blue border-none text-[16px] font-light placeholder:text-[16px] placeholder:text-white/60 placeholder:font-light" placeholder="+92 333 123456"/>
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-2 w-full">
                <p className="text-[16px] font-normal">Available Date</p>
                <input type="text" className="px-3 py-4 rounded-[12px] bg-blue border-none text-[16px] font-light placeholder:text-[16px] placeholder:text-white/60 placeholder:font-light" placeholder="Enter Date (2024-09-01)"/>
                </div>
                <div className="flex flex-col gap-2 w-full">
                <p className="text-[16px] font-normal">Message</p>
                <textarea className="rounded-[12px] px-3 py-4 min-h-[200px] bg-blue border-[1px] border-lightBlue/30 placeholder:text-[16px] placeholder:text-white/60 placeholder:font-light text-[16px] font-light" placeholder="Enter Your Message"/>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-end mt-12'>
            <div className="bg-lightBlue text-white w-[250px] h-contain py-4 flex items-center justify-center rounded-lg cursor-pointer hover:bg-gradient-to-br from-lightblue to-blue transition-colors duration-300 ease-in-out">Book Now</div>
        </div>
    </section>
  )
}

export default Meeting