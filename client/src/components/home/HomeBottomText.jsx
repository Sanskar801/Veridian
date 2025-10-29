import { Link, NavLink, } from 'react-router'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
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