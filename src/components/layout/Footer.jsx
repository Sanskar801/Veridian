import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <footer className="footer bg-black h-[50vh] sm:h-[60vh] text-white flex flex-col justify-between p-4 sm:p-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                <div className="text-white flex gap-2 sm:gap-2 p-2">
                    <div className="border-2 rounded-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-3 sm:px-4 md:px-5">FB</div>
                    <div className="border-2 rounded-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-3 sm:px-4 md:px-5">IG</div>
                    <div className="border-2 rounded-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-3 sm:px-4 md:px-5">IN</div>
                </div>
                <NavLink to={"/contact"} className="border-2 rounded-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-3 sm:px-4 md:px-5 pb-2 uppercase">Contact</NavLink>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-0">
                    <span className="text-white text-xs sm:text-sm">clock__</span>
                    <span className="text-white text-xs sm:text-sm">India__</span>
                    <span className="text-white text-xs sm:text-sm">India__</span>
                </div>
                <div className='text-center flex flex-wrap justify-center gap-2 sm:gap-4 text-[0.4rem] sm:text-[0.5rem] font-medium'>
                    <div className="text-center">PRIVACY POLICY</div>
                    <div className="text-center">PRIVACY NOTICE</div>
                    <div className="text-center">ETHICS REPORT</div>
                    <div className="text-center">CONCENT CHOICES</div>
                </div>
                <div className="uppercase text-xs sm:text-sm">Back to top</div>
            </div>
        </footer>
    )
}

export default Footer