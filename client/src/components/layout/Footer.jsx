import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <footer className="footer bg-black h-[60vh] text-white flex flex-col justify-between p-2 px-2">
            <div className="flex  items-center justify-between">
                <div className="text-white flex gap-2 p-2 ">
                    <div className="border-2 rounded-4xl text-6xl font-bold px-5">FB</div>
                    <div className="border-2 rounded-4xl text-6xl font-bold px-5">IG</div>
                    <div className="border-2 rounded-4xl text-6xl font-bold px-5">IN</div>
                </div>
                <NavLink to={"/contact"} className="border-2 rounded-4xl text-6xl font-bold px-5 pb-2 uppercase">Contact</NavLink>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <span className="text-white">clock__</span>
                    <span className="text-white">India__</span>
                    <span className="text-white">India__</span>
                </div>
                <div className=' text-center flex gap-4 text-[.5rem] font-medium'>
                    <div>PRIVACY POLICY</div>
                    <div>PRIVACY NOTICE</div>
                    <div>ETHICS REPORT</div>
                    <div>CONCENT CHOICES</div>
                </div>
                <div className="uppercase">Back to top</div>
            </div>
        </footer>
    )
}

export default Footer