'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosLink } from "react-icons/io";
import Main4 from './main4';

export default function main3() {
    const sec1 = useRef()
    const sec2 = useRef()
    const sec3 = useRef()
    const sec4 = useRef()
    const sec5 = useRef()
    const [scr, setScr] = useState(0)
    const [wid, setWid] = useState(0)
    // let window = window
    useEffect(() => {
        setWid(window.innerWidth)
        window?.addEventListener('scroll', () => {
            setScr(scrollY)
           
            // console.log(scr);
            if (scr > 1100 && wid >= 1024 ) {
                sec1.current.style.position = 'sticky'
                sec1.current.style.top = '15vh'
                sec1.current.style.scale = 1000 / scr
                sec2.current.style.position = 'sticky'
                sec2.current.style.top = '15vh'
                sec2.current.style.transform = 'translateY(-' + (scr - 1050) + 'px)'
                sec2.current.style.scale = 1200 / scr
                sec3.current.style.position = 'sticky'
                sec3.current.style.top = '15vh'
                sec3.current.style.transform = 'translateY(-' + (scr - 950) + 'px)'
                sec3.current.style.scale = 1400 / scr
                sec4.current.style.position = 'sticky'
                sec4.current.style.top = '15vh'
                sec4.current.style.transform = 'translateY(-' + (scr - 850) + 'px)'
                sec4.current.style.scale = 1600 / scr
                sec5.current.style.position = 'sticky'
                sec5.current.style.top = '15vh'
                sec5.current.style.transform = 'translateY(-' + (scr - 750) + 'px)'
                sec5.current.style.scale = 1800 / scr
                
    
            } 
        })
        
    })
    
        

    
   

    const[_moveX , setMoveX] = useState(0)
    const[_moveY , setMoveY] = useState(0)
    const p1 = useRef(null)
    const p2 = useRef(null)
    const p3 = useRef(null)
    const p4 = useRef(null)
    const p5 = useRef(null)
    const span1 = useRef(null)
    const span2 = useRef(null)
    const span3 = useRef(null)
    const span4 = useRef(null)
    const span5 = useRef(null)

    function movesec1(e){
        setMoveX(e.clientX)
        setMoveY(e.clientY)
        span1.current.style.opacity = '1'
        // e.target.style.transition = '.4s'
        //p1.current.style
        // console.log();
        // چپ بالا
        if(_moveX < 230 && _moveY <= 230){
            setMoveX((e.clientX / 10) - 25)
            setMoveY((e.clientY / 10) -25 )

        }
        if(_moveX < 230 && _moveY >= 230){
            setMoveX((e.clientX / 10) - 45)
            setMoveY((e.clientY / 10) - 25 )

        }
        if(_moveX > 230 && _moveY >= 230){
            setMoveX((e.clientX / 10))
            setMoveY((e.clientY / 10))

        }
        if(_moveX > 230 && _moveY <= 230){
            setMoveX((e.clientX / 10))
            setMoveY((e.clientY / 10))

        }
        // console.log(e.target);
        p1.current.style.transform = 'translate3d('+_moveX+'px,'+_moveY+'px , 0)'
       
    }

    function movesec2(e){
        setMoveX(e.clientX)
        setMoveY(e.clientY)
        span2.current.style.opacity = '1'
        //p1.current.style
        // console.log();
        // چپ بالا
        if(_moveX < 230 && _moveY <= 230){
            setMoveX((e.clientX / 10) - 25)
            setMoveY((e.clientY / 10) -25 )

        }
        if(_moveX < 230 && _moveY >= 230){
            setMoveX((e.clientX / 10) - 45)
            setMoveY((e.clientY / 10) - 25 )

        }
        if(_moveX > 230 && _moveY >= 230){
            setMoveX((e.clientX / 10))
            setMoveY((e.clientY / 10))

        }
        if(_moveX > 230 && _moveY <= 230){
            setMoveX((e.clientX / 10))
            setMoveY((e.clientY / 10))

        }
        // console.log(e.target);
        p2.current.style.transform = 'translate3d('+_moveX+'px,'+_moveY+'px , 0)'
       
    }
    function movesec3(e){
        setMoveX(e.clientX)
        setMoveY(e.clientY)
        span3.current.style.opacity = '1'
        //p1.current.style
        // console.log();
        // چپ بالا
        if(_moveX < 230 && _moveY <= 230){
            setMoveX((e.clientX / 10) - 25)
            setMoveY((e.clientY / 10) -25 )

        }
        if(_moveX < 230 && _moveY >= 230){
            setMoveX((e.clientX / 10) - 45)
            setMoveY((e.clientY / 10) - 25 )

        }
        if(_moveX > 230 && _moveY >= 230){
            setMoveX((e.clientX / 10))
            setMoveY((e.clientY / 10))

        }
        if(_moveX > 230 && _moveY <= 230){
            setMoveX((e.clientX / 10))
            setMoveY((e.clientY / 10))

        }
        // console.log(e.target);
        p3.current.style.transform = 'translate3d('+_moveX+'px,'+_moveY+'px , 0)'
       
    }
    function movesec4(e){
        setMoveX(e.clientX)
        setMoveY(e.clientY)
        span4.current.style.opacity = '1'
        //p1.current.style
        // console.log();
        // چپ بالا
        if(_moveX < 230 && _moveY <= 230){
            setMoveX((e.clientX / 10) - 25)
            setMoveY((e.clientY / 10) -25 )

        }
        if(_moveX < 230 && _moveY >= 230){
            setMoveX((e.clientX / 10) - 45)
            setMoveY((e.clientY / 10) - 25 )

        }
        if(_moveX > 230 && _moveY >= 230){
            setMoveX((e.clientX / 10))
            setMoveY((e.clientY / 10))

        }
        if(_moveX > 230 && _moveY <= 230){
            setMoveX((e.clientX / 10))
            setMoveY((e.clientY / 10))

        }
        // console.log(e.target);
        p4.current.style.transform = 'translate3d('+_moveX+'px,'+_moveY+'px , 0)'
       
    }
    function movesec5(e){
        setMoveX(e.clientX)
        setMoveY(e.clientY)
        span5.current.style.opacity = '1'
        //p1.current.style
        // console.log();
        // چپ بالا
        if(_moveX < 230 && _moveY <= 230){
            setMoveX((e.clientX / 10) - 25)
            setMoveY((e.clientY / 10) -25 )

        }
        if(_moveX < 230 && _moveY >= 230){
            setMoveX((e.clientX / 10) - 45)
            setMoveY((e.clientY / 10) - 25 )

        }
        if(_moveX > 230 && _moveY >= 230){
            setMoveX((e.clientX / 10))
            setMoveY((e.clientY / 10))

        }
        if(_moveX > 230 && _moveY <= 230){
            setMoveX((e.clientX / 10))
            setMoveY((e.clientY / 10))

        }
        // console.log(e.target);
        p5.current.style.transform = 'translate3d('+_moveX+'px,'+_moveY+'px , 0)'
       
    }

    function stopmouse(){
        p1.current.style.transform = 'translate3d(0,0,0)'
        wid>1024  && (span1.current.style.opacity = '0')

   }
    function stopmouse2(){
        p2.current.style.transform = 'translate3d(0,0,0)'
        wid>1024  && (span2.current.style.opacity = '0')

   }
    function stopmouse3(){
        p3.current.style.transform = 'translate3d(0,0,0)'
        wid>1024  && (span3.current.style.opacity = '0')

   }
    function stopmouse4(){
        p4.current.style.transform = 'translate3d(0,0,0)'
        wid>1024  && (span4.current.style.opacity = '0')

   }
    function stopmouse5(){
        p5.current.style.transform = 'translate3d(0,0,0)'
        wid>1024  && (span5.current.style.opacity = '0')

   }



    return (
        <div className='w-full px-3 flex flex-wrap justify-center  *:border-red-500 relative'>
            <section className='w-full flex justify-center'>
                <h4 className=' flex justify-center  text-xl border-b-4 lg:text-4xl border-b-black'>FEATURED WORK</h4>
            </section>
            <section ref={sec1} onMouseLeave={()=>stopmouse()} onMouseMove={(ev)=>movesec1(ev)}  className='w-11/12 md:w-10/12 flex justify-center items-center relative mt-10'>
                <figure ref={p1} className='w-full flex justify-center ' >
                    <Image src='/weather.png' width={1000} height={80} alt="Picture of the author" />
                    <span  ref={span1} className='w-[100px] h-[100px]  lg:opacity-0 content-center overflow-hidden bg-gray-700 flex justify-center items-center absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  rounded-[50%] '>
                        <Link href='https://sedmahdihashemi.github.io/update-weather-2/' className='w-full h-full flex justify-center items-center text-white'>
                            <IoIosLink />
                        </Link>

                    </span>

                </figure>

            </section>
            <section ref={sec2} onMouseLeave={()=>stopmouse2()} onMouseMove={(ev)=>movesec2(ev)}  className='w-full md:w-10/12 flex justify-center items-center relative mt-10'>
                <figure ref={p2} className='w-full flex justify-center '>
                    <Image src='/digi.png' width={1000} height={80} alt="Picture of the author" />
                    <span ref={span2} className='w-[100px] h-[100px] opacity-100  lg:opacity-0 content-center  overflow-hidden bg-gray-700 flex justify-center items-center absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  rounded-[50%] '>
                        <Link href='https://sedmahdihashemi.github.io/digital/' className='w-full h-full flex justify-center items-center text-white'>
                            <IoIosLink />
                        </Link>

                    </span>

                </figure>

            </section>
            <section ref={sec3} onMouseLeave={()=>stopmouse3()} onMouseMove={(ev)=>movesec3(ev)} className='w-full md:w-10/12 flex justify-center items-center relative mt-10'>
                <figure ref={p3} className='w-full flex justify-center '>
                    <Image src='/sign.png' width={1000} height={80} alt="Picture of the author" />
                    <span ref={span3} className='w-[100px] h-[100px] lg:opacity-0  content-center overflow-hidden bg-gray-700 flex justify-center items-center absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  rounded-[50%] '>
                        <Link href='https://sedmahdihashemi.github.io/sign-up/' className='w-full h-full flex justify-center items-center text-white'>
                            <IoIosLink />
                        </Link>

                    </span>

                </figure>

            </section>
            <section ref={sec4} onMouseLeave={()=>stopmouse4()} onMouseMove={(ev)=>movesec4(ev)} className='w-full md:w-10/12 flex justify-center items-center relative mt-10'>
                <figure ref={p4} className='w-full flex justify-center '>
                    <Image src='/cof.jpg' width={1000} height={80} alt="Picture of the author" />
                    <span ref={span4} className='w-[100px] h-[100px] lg:opacity-0 content-center overflow-hidden bg-gray-700 flex justify-center items-center absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  rounded-[50%] '>
                        <Link href='https://sedmahdihashemi.github.io/sign-up/' className='w-full h-full flex justify-center items-center text-white'>
                            <IoIosLink />
                        </Link>

                    </span>

                </figure>

            </section>
            <section ref={sec5} onMouseLeave={()=>stopmouse5()} onMouseMove={(ev)=>movesec5(ev)} className='w-full md:w-10/12 flex justify-center items-center relative mt-10'>
                <figure ref={p5} className='w-full flex justify-center '>
                    <Image src='/webme.png' width={1000} height={80} alt="Picture of the author" />
                    <span ref={span5} className='w-[100px] h-[100px] content-center lg:opacity-0 overflow-hidden bg-gray-700 flex justify-center items-center absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  rounded-[50%] '>
                        <Link href='https://sedmahdihashemi.github.io/pesonalorg/' className='w-full h-full flex justify-center items-center text-white'>
                            <IoIosLink />
                        </Link>

                    </span>

                </figure>

            </section>

            <Main4 />

        </div>
    )
}
