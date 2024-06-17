import React, { useRef, useState } from 'react'
import Main5 from './main5'

export default function main4() {

    const [scrol, setScrol] = useState(0)
    const span1 = useRef(null)
    const span2 = useRef(null)
    const span3 = useRef(null)
    const span4 = useRef(null)
    window.addEventListener('scroll', () => {
        setScrol(scrollY/10)
        // console.log(scrol);
        if (scrol > 300) {
            // console.log(scrol);
            span1.current.style.transform = 'translateY(' + scrol+1800+ '%)'
            span1.current.style.transition = '.2s'

        }else{
            span1 && (span1.current.style.transform = 'translateY(-500%)')
            span1 && (span1.current.style.transition = '.2s')

        }
        if (scrol > 320) {
            // console.log(scrol);
            span2.current.style.transform = 'translateY(' + scrol+1800+ '%)'
            span2.current.style.transition = '.2s'

        }else{
            span2.current.style.transform = 'translateY(-500%)'
            span2.current.style.transition = '.2s'

        }
        if (scrol > 340) {
            // console.log(scrol);
            span3.current.style.transform = 'translateY(' + scrol+1800+ '%)'
            span3.current.style.transition = '.2s'

        }else{
            span3.current.style.transform = 'translateY(-500%)'
            span3.current.style.transition = '.2s'

        }
        if (scrol > 360) {
            // console.log(scrol);
            span4.current.style.transform = 'translateY(' + scrol+1800+ '%)'
            span4.current.style.transition = '.2s'

        }else{
            span4.current.style.transform = 'translateY(-500%)'
            span4.current.style.transition = '.2s'

        }
         
    })




    return (
        <>
        <div className='w-full flex flex-wrap lg:justify-center transform lg:translate-y-[-900px] my-14'>
            <section className='w-full flex justify-center mb-10'>
                <h5 className=' flex justify-center  text-xl border-b-4 lg:text-4xl border-b-black'>MY EXPERIENCE</h5>
            </section>

            <div className='w-full my-8 lg:w-7/12 justify-center flex'>
                <section className='w-1/12 flex justify-center'>
                    <span className='w-1 h-full flex items-center overflow-hidden  rounded-md bg-gray-400 opacity-65'>

                        <span ref={span1} className='w-full h-14 bg-black transform translate-y-[-500%]'></span>

                    </span>

                </section>
                <hgroup className='w-10/12 *:ms-4'>
                    <p className='text-sm'>WEBFLOW AT 2010-2014</p>
                    <h2 className='w-full text-xl font-bold mt-3'>FULL-STACK DEVELOPER</h2>
                    <ul className='*:list-disc *:text-lg *:my-3 *:ms-4 mt-5'>
                        <li>Designed marketing materials for clients in various industries</li>
                        <li>Developed brand guidelines for multiple clients</li>
                        <li>Created marketing materials for local events</li>
                    </ul>

                </hgroup>

            </div>
            <div className='w-full flex lg:w-7/12 justify-center my-12'>
                <section className='w-1/12 flex justify-center'>
                    <span className='w-1 h-full flex overflow-hidden rounded-md bg-gray-400 opacity-65'>

                        <span ref={span2} className='w-full h-14 bg-black transform translate-y-[-200px]'></span>

                    </span>

                </section>
                <hgroup className='w-10/12 *:ms-4'>
                    <p className='text-sm'>TESLA AT 2014-2017</p>
                    <h2 className='w-full text-xl font-bold mt-3'>MOTION & INTERACTIVE DESIGNER</h2>
                    <ul className='*:list-disc *:text-lg *:my-3 *:ms-4 mt-5'>
                        <li>Developed brand guidelines for multiple clients</li>
                        <li>Created marketing materials for local events</li>
                        {/* <li>Created marketing materials for local events</li> */}
                    </ul>

                </hgroup>

            </div>
            <div className='w-full flex lg:w-7/12 justify-center my-12'>
                <section className='w-1/12 flex justify-center'>
                    <span className='w-1 h-full flex overflow-hidden rounded-md bg-gray-400 opacity-65'>

                        <span ref={span3} className='w-full h-14 bg-black transform translate-y-[-200px]'></span>

                    </span>

                </section>
                <hgroup className='w-10/12 *:ms-4'>
                    <p className='text-sm'>ADOBE AT 2017-2020</p>
                    <h2 className='w-full text-xl font-bold mt-3'>SENIOR INTERFACE DEVELOPER</h2>
                    <ul className='*:list-disc *:text-lg *:my-3 *:ms-4 mt-5'>
                        <li>Designed marketing materials for clients in various industries</li>
                        <li>Created marketing materials for local events</li>
                        {/* <li>Created marketing materials for local events</li> */}
                    </ul>

                </hgroup>

            </div>
            <div className='w-full flex lg:w-7/12 flex-wrap justify-center my-12'>
                <section className='w-1/12 flex justify-center'>
                    <span className='w-1 h-full flex overflow-hidden rounded-md bg-gray-400 opacity-65'>

                        <span ref={span4} className='w-full h-14 bg-black transform translate-y-[-200px]'></span>

                    </span>

                </section>
                <hgroup className='w-10/12 *:ms-4'>
                    <p className='text-sm'>WEBFLOW AT 2023-PRESENT</p>
                    <h2 className='w-full text-xl font-bold mt-3'>UI/UX DESIGNER</h2>
                    <ul className='*:list-disc *:text-lg *:my-3 *:ms-4 mt-5'>
                        <li>Created marketing materials for local events</li>
                        {/* <li>Developed brand guidelines for multiple clients</li>
                        <li>Created marketing materials for local events</li> */}
                    </ul>

                </hgroup>

            </div>

        </div>

        <Main5 />

        </>
    )
}
