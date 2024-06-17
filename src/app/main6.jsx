import React, { useEffect, useRef, useState, useCallback, useLayoutEffect } from 'react'
import MyComponent from './exam'

export default function main6() {

    const [tog, setTog] = useState('off')
    const [tog2, setTog2] = useState('off')
    const [tog3, setTog3] = useState('off')
    const [tog4, setTog4] = useState('off')
    const [tog5, setTog5] = useState('off')
    const plus = useRef(null)
    const plus2 = useRef(null)
    const plus3 = useRef(null)
    const plus4 = useRef(null)
    const plus5 = useRef(null)
    //////////
    const para = useRef(null)
    const para2 = useRef(null)
    const para3 = useRef(null)
    const para4 = useRef(null)
    const para5 = useRef(null)

    //////////
    const sec1 = useRef(null)
    const sec2 = useRef(null)
    const sec3 = useRef(null)
    const sec4 = useRef(null)
    const sec5 = useRef(null)

    function _down1() {
        if (tog == 'off') {
            setTog('on')
            plus.current.style.transform = 'rotate(45deg)'
            para.current.style.height = 'auto'
            // sec1.current.style.transform = 'translateY(-100px)'
        }else{
            setTog('off')
            plus.current.style.transform = 'rotate(0deg)'
            para.current.style.height = '0px'
            // sec1.current.style.transform = 'translateY(0px)'

        }

    }
    function _down2() {
        if (tog2 == 'off') {
            setTog2('on')
            plus2.current.style.transform = 'rotate(45deg)'
            para2.current.style.height = 'auto'
            // sec1.current.style.transform = 'translateY(-100px)'
        }else{
            setTog2('off')
            plus2.current.style.transform = 'rotate(0deg)'
            para2.current.style.height = '0px'
            // sec1.current.style.transform = 'translateY(0px)'

        }

    }
    function _down3() {
        if (tog3 == 'off') {
            setTog3('on')
            plus3.current.style.transform = 'rotate(45deg)'
            para3.current.style.height = 'auto'
            // sec1.current.style.transform = 'translateY(-100px)'
        }else{
            setTog3('off')
            plus3.current.style.transform = 'rotate(0deg)'
            para3.current.style.height = '0px'
            // sec1.current.style.transform = 'translateY(0px)'

        }

    }
    function _down4() {
        if (tog4 == 'off') {
            setTog4('on')
            plus4.current.style.transform = 'rotate(45deg)'
            para4.current.style.height = 'auto'
            // sec1.current.style.transform = 'translateY(-100px)'
        }else{
            setTog4('off')
            plus4.current.style.transform = 'rotate(0deg)'
            para4.current.style.height = '0px'
            // sec1.current.style.transform = 'translateY(0px)'

        }

    }
    function _down5() {
        if (tog5 == 'off') {
            setTog5('on')
            plus5.current.style.transform = 'rotate(45deg)'
            para5.current.style.height = 'auto'
            // sec1.current.style.transform = 'translateY(-100px)'
        }else{
            setTog5('off')
            plus5.current.style.transform = 'rotate(0deg)'
            para5.current.style.height = '0px'
            // sec1.current.style.transform = 'translateY(0px)'

        }

    }

  
    























    return (
        <>
        <div className='w-full flex px-2 flex-wrap lg:justify-center transform lg:translate-y-[-300px] mt-32'>
            <section className='w-full flex justify-center mb-40'>
                <h5 className=' flex justify-center  text-xl border-b-4 md:text-3xl lg:text-4xl border-b-black'>FREQUENTLY ASKED QUESTION</h5>
            </section>

            <section ref={sec1} onClick={() => _down1(0)} className='w-full lg:w-8/12 border-b-2 border-black cursor-pointer *: flex justify-between' >
                <div className='w-7/12 flex items-center '>
                    <p className='text-xl w-full flex lg:text-xl items-center  font-bold'>WHAT SECTORS DO YOU SPECIALISE IN?</p>
                </div>
                <div className='w-5/12 flex justify-center lg:justifycentert  items-center'>
                    <span ref={plus} className='w-10 mb-2 h-10 flex lg:ms-5 border-2 border-black text-2xl justify-center items-center rounded-[50%]'>+</span>
                </div>


            </section>
            <section ref={para} className='w-8/12 items-start flex   mb-8 lg:mb-16 h-0 duration-300 overflow-hidden'>
                <p className='flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, temporibus.</p>

            </section>
            <section ref={sec2} onClick={() => _down2(1)}  className='w-full lg:w-8/12 border-b-2 border-black cursor-pointer  flex justify-between' >
                <div className='w-7/12 flex items-center'>
                    <p className='text-xl flex lg:text-xl items-center w-full font-bold'>WHAT SECTORS DO YOU SPECIALISE IN?</p>
                </div>
                <div className='w-5/12 flex justify-center lg:justify-center items-center'>
                    <span ref={plus2} className='w-10 mb-2  lg:ms-5 h-10 flex border-2 border-black text-2xl justify-center items-center rounded-[50%]'>+</span>
                </div>


            </section>
            <section ref={para2} className='w-8/12 items-start flex mb-8 lg:mb-16 h-0 duration-300 overflow-hidden'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, temporibus.</p>

            </section>
            <section ref={sec3}onClick={() => _down3(2)} className='w-full lg:w-8/12 border-b-2 border-black cursor-pointer *: flex justify-between' >
                <div className='w-7/12 flex items-center'>
                    <p className='text-xl w-full flex lg:text-xl items-center font-bold'>WHAT SECTORS DO YOU SPECIALISE IN?</p>
                </div>
                <div className='w-5/12 flex justify-center lg:justify-center items-center'>
                    <span ref={plus3} className='w-10 mb-2  h-10 lg:ms-5 flex border-2 border-black text-2xl justify-center items-center rounded-[50%]'>+</span>
                </div>


            </section>
            <section ref={para3} className='w-8/12 items-start flex mb-8 lg:mb-16 h-0 duration-300 overflow-hidden'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, temporibus.</p>

            </section>
            <section ref={sec4} onClick={() => _down4(3)} className='w-full lg:w-8/12 border-b-2 border-black cursor-pointer *: flex justify-between' >
                <div className='w-7/12 flex items-center'>
                    <p className='text-xl w-full flex lg:text-xl items-center font-bold'>WHAT SECTORS DO YOU SPECIALISE IN?</p>
                </div>
                <div className='w-5/12 flex justify-center lg:justify-center items-center'>
                    <span ref={plus4} className='w-10 mb-2  h-10 lg:ms-5 flex border-2 border-black text-2xl justify-center items-center rounded-[50%]'>+</span>
                </div>


            </section>
            <section ref={para4} className='w-8/12 items-start flex mb-8 lg:mb-16 h-0 duration-300 overflow-hidden'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, temporibus.</p>

            </section>
            <section ref={sec5} onClick={() => _down5(4)} className='w-full lg:w-8/12 border-b-2 border-black cursor-pointer *: flex justify-between ' >
                <div className='w-7/12 flex items-center'>
                    <p className='text-xl w-full flex lg:text-xl items-center font-bold'>WHAT SECTORS DO YOU SPECIALISE IN?</p>
                </div>
                <div className='w-5/12 flex justify-center lg:justify-center items-center'>
                    <span ref={plus5} className='w-10 mb-2  h-10 lg:ms-5 flex border-2 border-black text-2xl justify-center items-center rounded-[50%]'>+</span>
                </div>


            </section>
            <section ref={para5} className='w-8/12 items-start flex  mb-8 lg:mb-16 h-0 duration-300 overflow-hidden'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, temporibus.</p>

            </section>

        </div>
    </>
    )
}
