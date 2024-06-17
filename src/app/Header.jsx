'use client'

import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { TfiAlignRight } from "react-icons/tfi";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import Main1 from './Main1';




export default function Header(props) {
    // console.log(shutSt);

    const [shutSt, setShutSt] = useState([]);
    const _headRef = useRef();
    
        useEffect(() => {
            props.setHeader(_headRef.current);
        }, []);
   


    



    return (
        <>
            <header ref={_headRef} className='w-full flex flex-wrap z-10 bg-maghzPeste' >

                <Lefthead />
                <Midhead />

                <Righthead shutSt={shutSt} />


                <Shutter setShutSt={setShutSt} />

            </header>
          
               

            

        </>
    )
}

function Lefthead() {
    return (
        <div className='w-3/12 flex justify-center items-center  py-7 *: *:-red-600'>
            <h2 className='font-extrabold text-3xl cursor-pointer'>M / H </h2>

        </div>

    )
}
function Midhead() {
    return (
        <div className='hidden lg:flex lg:w-6/12  '>
            <nav className='w-full flex justify-evenly *: *:w-2/12'>
                <section className='flex justify-center items-center  flex-wrap'>
                    <Link className='w-full text-xl hover:bg-black hover:text-maghzPeste duration-500 flex justify-center h-full items-center py-3' href={'./'}>home</Link>
                </section>
                <section className='flex justify-center items-center  flex-wrap'>
                    <Link className='w-full text-xl hover:bg-black hover:text-maghzPeste  duration-500 flex justify-center h-full items-center py-3' href={'./about'}>about</Link>
                </section>
                <section className='flex justify-center items-center  flex-wrap'>
                    <Link className='w-full text-xl hover:bg-black hover:text-maghzPeste duration-500   flex justify-center h-full items-center py-3' href={'./about'}>portfolio</Link>
                </section>
                <section className='flex justify-center items-center  flex-wrap'>
                    <Link className='w-full text-xl hover:bg-black hover:text-maghzPeste duration-500 flex justify-center h-full items-center py-3' href={'./about'}>news</Link>
                </section>

            </nav>
        </div>

    )
}
function Righthead({ shutSt }) {
    const [isOpen, setIsOpen] = useState(false);
    const _close = useRef()
    const _open = useRef()
    // console.log(shutSt);
    const iconMove = useRef()









    const _openClose = (e) => {
        if (isOpen == false) {
            // console.log(shutSt);


            setIsOpen(!isOpen);
            _open.current.style.display = 'none';
            _close.current.style.display = 'flex';
            shutSt.style.display = 'flex'





        } else {
            setIsOpen(false)
            _open.current.style.display = 'flex';
            _close.current.style.display = 'none';
            shutSt.style.display = 'none'
        }


    };

    const [moveX, setMoveX] = useState([])
    const [moveY, setMoveY] = useState([])
    function _move(e) {
        setMoveX(e.clientX / 25)
        setMoveY(e.clientY / 25)

        // console.log(moveX);
        e.target.parentElement.style.transform = 'translateY(' + moveX + 'px)'
        e.target.parentElement.style.transform = 'translateX(' + moveY + 'px)'
    }


    return (
        <div className="w-9/12 lg:w-3/12  flex flex-wrap justify-end lg:justify-center items-center">

            <section className=" flex cursor-pointer lg:hidden">
                <i onClick={_openClose} className="text-3xl pe-3" ref={_open}>
                    <TfiAlignRight />
                </i>
                <i onClick={_openClose} className="text-3xl pe-3 hidden" ref={_close}>
                    <RiCloseLargeLine />
                </i>

            </section>

            <section className='w-7/12 hidden lg:flex  justify-around items-center  '>
                <span onMouseMove={(ev) => _move(ev)} className='w-2/12 duration-100 hover:bg-black hover:text-white transform  text-xl flex justify-center py-1 rounded-[200px] ' ref={iconMove}>
                    <FaInstagram />
                    <a href="https://www.instagram.com/mahdi_hashemi_web/" className='absolute w-full  h-full overflow-hidden'></a>
                </span>
                <span onMouseMove={(ev) => _move(ev)} className='w-2/12 duration-100 relative hover:bg-black hover:text-white text-xl flex justify-center py-1  rounded-[200px]'>
                    <FaGithub />
                    <a href="https://github.com/sedmahdihashemi" className='absolute w-full  h-full overflow-hidden'></a>
                </span>
                <span onMouseMove={(ev) => _move(ev)} className='w-2/12 duration-100 relative hover:bg-black hover:text-white text-xl flex justify-center py-1  rounded-[200px]'>
                    <FaLinkedinIn />
                    <a href="https://www.linkedin.com/in/mahdi-hashemi-86970a2a8/" className='absolute w-full  h-full overflow-hidden'></a>
                </span>
                <span onMouseMove={(ev) => _move(ev)} className='w-2/12 duration-100 relative hover:bg-black hover:text-white text-xl flex justify-center py-1  rounded-[200px]'>
                    <CgProfile />
                    <a href="https://sedmahdihashemi.github.io/pesonalorg/" className='absolute  w-full  h-full overflow-hidden'></a>
                </span>


            </section>


        </div>
    );
}


function Shutter(props) {
    const shutRef = useRef();

    useEffect(() => {
        props.setShutSt(shutRef.current);
    }, []);

    // useEffect(() => {

    //     setShutSt(shutRef.current);
    // }, []);







    return (
        <div className=' w-full  flex-wrap *: *:w-1/2  bg-white hidden' ref={shutRef}>


            <section className='flex justify-center items-center  flex-wrap'>
                <Link className='w-full hover:bg-black hover:text-maghzPeste duration-500  h-full flex justify-center py-3' href={'./'}>home</Link>
            </section>
            <section className='flex justify-center items-center  flex-wrap'>
                <Link className='w-full hover:bg-black hover:text-maghzPeste duration-500 flex justify-center py-3' href={'./about'}>about</Link>
            </section>
            <section className='flex justify-center items-center  flex-wrap'>
                <Link className='w-full hover:bg-black hover:text-maghzPeste duration-500 flex justify-center py-3' href={'./about'}>portfolio</Link>
            </section>
            <section className='flex justify-center items-center  flex-wrap'>
                <Link className='w-full hover:bg-black hover:text-maghzPeste duration-500 flex justify-center py-3' href={'./about'}>news</Link>
            </section>




        </div>
    )
}
