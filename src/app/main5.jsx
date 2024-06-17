'use client'
import Image from 'next/image'
import React from 'react'
import Main6 from './main6'

export default function main5() {
  return (
    <>
    <div className='w-11/12 sm:w-8/12  lg:w-11/12 justify-around flex  flex-wrap lg:translate-y-[-500px] *:'>
        <section className='w-6/12 flex justify-around mb-10'>
                <h5 className=' flex   text-xl border-b-4 lg:text-4xl border-b-black'>MY EXPERIENCE</h5>
                {/* <h5 className=' flex   text-xl border-b-4 lg:text-4xl border-b-black'>MY EXPERIENCE</h5> */}
            </section>
            <section className='w-6/12 h-11 flex justify-center'>
            <button  className='w-10/12 lg:w-5/12   text-md overflow-hidden hover:opacity-70 text-sm   rounded-2xl flex justify-center items-center bg-black text-white'>
            <p className='w-full'>ALL POSTS</p>


            </button>
            </section>

            <div className='w-11/12 sm:w-10/12 md:w-8/12 lg:w-5/12 bg-redImg bg-cover px-5 lg:pt-24  flex flex-wrap justify-center '>
                <section className='w-full flex  mt-12'>
                    <p className='w-9/12 font-bold border-b-2 text-2xl   pt-12 text-white'>COMMUNICATION BETWEEN STUDIO DEPARTMENTS</p>

                </section>
                <section className='w-full flex justify-between my-4'>
                    <p className='text-gray-300'>April 25,2023</p>
                    <button className='bg-green-400 text-white hover:opacity-70 rounded-lg text-sm w-5/12'>April 25,2023</button>

                </section>
                
                    
                   

            </div>
            <div className='w-11/12 sm:w-10/12 md:w-8/12 lg:w-5/12 bg-blueImg bg-cover px-5 lg:pt-24 my-10 lg:my-0  flex flex-wrap justify-center '>
                <section className='w-full flex  mt-12'>
                    <p className='w-9/12 font-bold border-b-2 text-2xl  pt-12 text-white'>COMMUNICATION BETWEEN STUDIO DEPARTMENTS</p>

                </section>
                <section className='w-full flex justify-between my-4'>
                    <p className='text-white'>May 15,2023</p>
                    <button className='bg-red-700 text-white hover:opacity-70 rounded-lg text-sm w-5/12'>April 25,2023</button>

                </section>
                
                    
                   

            </div>




    </div>

    <Main6 />
    </>
  )
}
