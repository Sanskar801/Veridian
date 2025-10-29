import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useLocation } from 'react-router';

const Stairs = ({ children }) => {

    const currentPath = useLocation().pathname;
    const stairParentRef = useRef(null);
    const pageRef = useRef(null);

    useGSAP(() => {

        const mm = gsap.matchMedia();

        mm.add({
            isMobile: "(max-width: 640px)",
            isTablet: "(min-width: 641px) and (max-width: 1024px)",
            isDesktop: "(min-width: 1025px)"
        }, (context) => {
            const { isMobile, isTablet } = context.conditions;

            const staggerAmount = isMobile ? -0.15 : (isTablet ? -0.2 : -0.25);
            const pageDelay = isMobile ? 1.0 : (isTablet ? 1.3 : 1.5);

            const tl = gsap.timeline();

            tl.set(stairParentRef.current, { display: "block" });
            tl.from('.stair', {
                height: 0,
                stagger: { amount: staggerAmount },
            });
            tl.to('.stair', {
                y: '100%',
                stagger: { amount: staggerAmount },
            });
            tl.set(stairParentRef.current, { display: "none" });
            tl.set('.stair', { y: '0%' });

            gsap.from(pageRef.current, {
                opacity: 0,
                delay: pageDelay,
            });

            return () => {
                tl.kill();
            };
        });

        return () => mm.revert();

    }, [currentPath])

    return (
        <>
            <div ref={stairParentRef} className='h-screen w-full fixed z-10 top-0 left-0 pointer-events-none' style={{ height: '100svh' }}>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black transform-gpu'></div>
                    <div className='stair h-full w-1/5 bg-black transform-gpu'></div>
                    <div className='stair h-full w-1/5 bg-black transform-gpu'></div>
                    <div className='stair h-full w-1/5 bg-black transform-gpu'></div>
                    <div className='stair h-full w-1/5 bg-black transform-gpu'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {children}
            </div>
        </>
    )
}

export default Stairs