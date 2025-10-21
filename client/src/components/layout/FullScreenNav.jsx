import React from 'react'
import svg from "../../assets/close.svg"
import { NavLink } from 'react-router';

const FullScreenNav = ({ navs, setIsMenuActive }) => {
    return (
        <div className="bg-black h-[100vh] w-screen z-50 absolute flex flex-col">

            <div className='flex justify-between'>
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
                <button className='cursor-pointer' onClick={() => setIsMenuActive(false)}>
                    <img src={svg} alt="close-menu  " />
                </button>
            </div>

            <div className="flex flex-col text-center text-8xl font-bold h-full">
                {navs.map(navL => (
                    <div
                        key={navL.id}
                        onClick={() => setIsMenuActive(false)}
                        className="w-full p-4 border-y border-white relative overflow-hidden group"
                    >
                        <NavLink
                            to={navL.linkTo}
                            className="block text-white transition-colors duration-300 group-hover:text-black"
                        >
                            {navL.name}
                        </NavLink>

                        {/* Carousel appears only on hover */}
                        <div className="absolute inset-0 bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="flex whitespace-nowrap animate-[carousel-scroll_10s_linear_infinite]">
                                <span className="mx-8 uppercase text-black">{navL.hoverText}</span>
                                <img src={navL.img} alt="" className="h-20 mx-8 object-contain" />
                                <span className="mx-8 uppercase text-black">{navL.hoverText}</span>
                                <img src={navL.img} alt="" className="h-20 mx-8 object-contain" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>


            <div className='flex justify-between'>
                <div>
                    <span className="text-white">clock__</span>
                    <span className="text-white">India__</span>
                    <span className="text-white">India__</span>
                </div>
                <div className='text-white text-center flex gap-4 text-[.5rem] font-medium'>
                    <div>PRIVACY POLICY</div>
                    <div>PRIVACY NOTICE</div>
                    <div>ETHICS REPORT</div>
                    <div>CONCENT CHOICES</div>
                </div>
                <div className="text-white flex gap-2">
                    <div className="border-2 rounded-4xl text-4xl font-bold px-3">FB</div>
                    <div className="border-2 rounded-4xl text-4xl font-bold px-3">IG</div>
                    <div className="border-2 rounded-4xl text-4xl font-bold px-3">IN</div>
                </div>
            </div>

        </div>
    )
}

export default FullScreenNav;