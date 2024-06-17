import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
    <h3 className='w-8/12 text-9xl lg:text-[160px]  flex justify-center'>soon...</h3>
    <div className='w-full lg:w-8/12 px-2 flex mt-16 lg:flex-nowrap flex-wrap bg-maghzPeste font-mhd1 2xl:container 2xl:mx-auto overflow-hidden'>
        

        <section className='w-full lg:w-2/12  order-[-1] *: flex'>
            <Link href='#' className='font-extrabold text-3xl flex items-center  cursor-pointer'>M / H</Link>
        </section>
        <section className='w-full lg:w-4/12 my-8 lg:my-0  *:flex *:items-center    flex *:border-b-2 *:border-black'>
            <p>STYLE GUIDE</p>
            <p className='ms-5'>LICENSING</p>

        </section>
        <section className='w-full lg:w-6/12  order-4  flex mb-5'>
            <p >© This is a Flowmance template powered by MahdiHashemi</p>

        </section>
    </div>
    </>
  )
}
