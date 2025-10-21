import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router'
import FullScreenNav from './FullScreenNav';

const Navbar = () => {

    const [isMenuActive, setIsMenuActive] = useState(false);
    const navGreenRef = useRef(null);
    const navs = [
        { id: 1, name: "WORK", linkTo: "/work", hoverText: "what we did", img: "../../assets/map-lying-wooden-table.jpg" },
        { id: 2, name: "AGENCY", linkTo: "/agence", hoverText: "who we are", img: "../../assets/medium-shot-smiley-man-posing.jpg" },
        { id: 3, name: "CONTACT", linkTo: "/contact", hoverText: "send us fax", img: "" },
        { id: 4, name: "BLOGS", linkTo: "/blogs", hoverText: "read articles", img: "" },
    ];

    return (
        <div className='flex fixed top-0 w-full items-start justify-between z-4 bg-transparent'>

            <NavLink className="py-3 pl-2" to={"/"}>
                <svg className='h-12 pl-4 w-auto' viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="35"
                        fontFamily="Helvetica, sans-serif"
                        fontSize="36"
                        fontWeight="700"
                        fill="#D3FD50"
                        letterSpacing="2">VARIDIAN</text>
                </svg>
            </NavLink>

            <div
                onClick={() => setIsMenuActive(true)}
                onMouseEnter={() => {
                    navGreenRef.current.style.height = '100%'
                }}
                onMouseLeave={() => {
                    navGreenRef.current.style.height = '0%'
                }}
                className='menu lg:h-10 h-10 bg-black relative lg:w-[16vw] w-48'>
                <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
                    <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
                    <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
                </div>
            </div>

            {isMenuActive && <FullScreenNav navs={navs} setIsMenuActive={setIsMenuActive} />}
        </div>
    )
}

export default Navbar;