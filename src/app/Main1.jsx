'use client'

import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from './Header'
import { FaArrowRight } from "react-icons/fa6";
import Main2 from './main2';
import Main3 from './main3';


export default function Main1(props) {
  const [_header , setHeader] = useState(null);

  const _img = useRef()
  

  
  // console.log(body);

  

  const [movex, setMovex] = useState([])
  const [movey, setMovey] = useState([])


  function funcMove(e) {

    // console.log(_img.current);

      setMovex(e.clientX / 3)
      setMovey(e.clientY / 3)
      // console.log(movex);
      _img.current.style.transform = 'translate3d(' + movex + 'px, ' + movey + 'px , 0px)rotateZ(4deg)'
      // _img.current.style.transform = ''
      _img.current.style.transition = '0s'
  }

  function funcleave(){
     _img.current.style.transform = 'translate3d(0px, 0px , 0px)'
     _img.current.style.transition = '1s'
  }

 

  
  
  
  // console.log(_header);
  
   useEffect(()=>{
    window.addEventListener('scroll' , ()=>{
      
        if(window.scrollY > 40 && _header ){
          _header.style.position = 'fixed'
          _header.style.transition = '2s'
        }else if(window.scrollY < 40 && _header ){
           _header.style.position = 'static'
    
        }
      
  
    })
   })

  

  
  
 


  



  return (
    <>
    <Header  setHeader={setHeader} />
 
    
   
    <div  className='w-full  bg-maghzPeste'  onMouseLeave={(ev) => funcleave(ev)} onMouseMove={(ev) => funcMove(ev)}>

      <section  className='w-full pt-4  flex flex-wrap'>
        <div className='w-full flex  -red-600  *:text-[19vw] *: *:2xl:static *:2xl:text-[10vw] *:font-extrabold' >

          <h1 className=' ms-4 lg:ms-20 relative z-[3] text-maghzPeste'>SMH</h1>
          <h1 className='relative z-[1] text-maghzPeste'>I</h1>
        </div>
        <div className='w-full flex flex-wrap lg:flex-nowrap   *: *:2xl:static' >

          <h1 className='ms-4 flex text-[14vw] 2xl:text-[10vw] font-extrabold items-start lg:ms-20 relative z-[3]'>W</h1>
          <h1 className=' relative text-[14vw] 2xl:text-[10vw] font-extrabold z-[1]'>E</h1>
          <h1 className='relative text-[14vw] 2xl:text-[10vw] font-extrabold z-[3]'>B</h1>

          <div className='w-full  ms-4 flex flex-wrap lg:ms-20 lg:w-4/12 content-center lg:h-full *: '>
            <p className='w-11/12 py-4 text-lg lg:text-2xl'>
            An innovative designer dedicated to creating visually stunning and imaginative websites.
            </p>
            <button  className='w-5/12 my-5  text-md overflow-hidden hover:opacity-70 text-sm h-10 pt-1 rounded-xl flex flex-wrap justify-center items-center bg-black text-white'>
            <p >GET IN TOUTH</p>
            {/* <FaArrowRight className='w-full transform translate-y-10 hidden' /> */}


            </button>

          </div>
          
        </div>

        <figure id='transf' ref={_img} className='w-3/12 absolute  transform  z-[2] lg:left-[24%] left-[20%] '>
          <Image src='/mahdi.jpg'  width={300} height={300} className='rounded-[50%] ' alt="Picture of the author" />
        </figure>

        {/* <div className='h-[100vh]'></div> */}

      </section>
      
    </div>

    <Main2 />
    
    <Main3 />

    

    </>
  )
}
