import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useLocation } from 'react-router';

const Stairs = ({ children }) => {

    const currentPath = useLocation().pathname;
    const stairParentRef = useRef(null);
    const pageRef = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline();

        tl.to(stairParentRef.current, {
            display: "block",
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25,
            },
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25,
            }
        })
        tl.to(stairParentRef.current, {
            display: "none",
        })
        tl.to('.stair', {
            y: "0%",
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.5,
        })

    }, [currentPath])

    return (
        <>
            <div ref={stairParentRef} className='h-screen w-full fixed z-10 top-0'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {children}
            </div>
        </>
    )
}

export default Stairs