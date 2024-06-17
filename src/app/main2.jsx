'use client'

import React, { useRef, useState } from 'react'

export default function main2() {

    function goTo(){
        window.location.href = 'https://www.linkedin.com/in/mahdi-hashemi-86970a2a8/'
    }
    const p1 = useRef(null)
    const[_moveX , setMoveX] = useState(0)
    const[_moveY , setMoveY] = useState(0)

    function movesircle(e){
        setMoveX(e.clientX)
        setMoveY(e.clientY)
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
        p1.current.style.transform = 'translate3d('+_moveX+'px,'+_moveY+'px , 0)'
       
    }
    function stopmouse(){
         p1.current.style.transform = 'translate3d(0,0,0)'

    }





  return (
    <>
    
    <div className='w-full flex justify-center my-12'>
        <section onClick={(ev)=>goTo(ev)}  className='w-full lg:w-2/3 cursor-pointer  overflow-hidden justify-center  flex *:shrink-0' >
      <hgroup className='flex *:mx-7 *:text-sm' id='go'>
      <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
        <p  className='w-full'>AVAILABLE FOR FREELANCER WORLDWIDE --- GET IN TOUCH </p>
      </hgroup>
    

        </section>

    </div>

    <div className='w-full flex flex-wrap mb-28'>
        <section className='w-full flex justify-center my-5'>
            <h3 className=' flex justify-center  text-4xl border-b-4 border-b-black'>skills</h3>
        </section>
        <section className='w-full  flex flex-wrap lg:flex-nowrap justify-center mt-4 '>
            <div  onMouseLeave={()=>stopmouse()} onMouseMove={(ev)=> movesircle(ev)} className='w-[250px] my-2 mx-2 duration-500 h-[250px] hover:scale-[1.3] flex justify-center items-center border-2 border-black rounded-[50%]'>
                <p ref={p1} className='font-bold static'>PROTOTYPING</p>
            </div>
            <div  className='w-[250px] my-2 mx-2 duration-500 h-[250px] hover:scale-[1.3] flex justify-center items-center border-2 border-black rounded-[50%]'>
                <p  className='font-bold'>BRANDING</p>
            </div>
            <div  className='w-[250px] my-2 mx-2 duration-500 h-[250px] hover:scale-[1.3] flex justify-center items-center border-2 border-black rounded-[50%]'>
                <p  className='font-bold'>DESIGN</p>
            </div>
            <div   className='w-[250px] my-2 mx-2 duration-500 h-[250px] hover:scale-[1.3] flex justify-center items-center border-2 border-black rounded-[50%]'>
                <p  className='font-bold'>STRATEGY</p>
            </div>

        </section>

    </div>
    {/* <h1>x:{_moveX} * y:{_moveY}</h1> */}
    </>
  )
}
