
import { Link, NavLink, } from 'react-router'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28  lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Veridian is a digital agency that thinks every action to feed the brand — today, tomorrow, and in the years to come. Nous cherchons l’étincelle between data and emotion, between technology and human truth. That’s where marketing becomes meaning.</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <NavLink className='text-[6vw] lg:mt-6' to='/projects'>Projects</NavLink>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <NavLink className='text-[6vw] lg:mt-6' to='/agence'>Agence</NavLink>
      </div>
    </div>
  )
}

export default HomeBottomText