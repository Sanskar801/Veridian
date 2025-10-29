import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] mt-32 sm:mt-48 md:mt-64 lg:mt-0 pt-5 text-center px-4'>
            <div className='text-[10vw] sm:text-[9vw] md:text-[8.5vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[9vw] sm:leading-[8.5vw] md:leading-[8vw] lg:leading-[8vw]'>
                L&apos;énergie
            </div>
            <div className='text-[10vw] sm:text-[9vw] md:text-[8.5vw] lg:text-[9.5vw] flex justify-center items-start uppercase leading-[9vw] sm:leading-[8.5vw] md:leading-[8vw] lg:leading-[8vw]'>
                that
                <div className='h-[6vw] w-[14vw] sm:h-[6.5vw] sm:w-[15vw] md:h-[7vw] md:w-[16vw] rounded-full -mt-0.5 sm:-mt-1 overflow-hidden mx-1 sm:mx-2'>
                    <Video />
                </div>
                transforms
            </div>
            <div className='text-[10vw] sm:text-[9vw] md:text-[8.5vw] lg:text-[9.5vw] justify-center flex items-center uppercase leading-[9vw] sm:leading-[8.5vw] md:leading-[8vw] lg:leading-[8vw]'>
                ideas into movement.
            </div>
            <div className='block sm:hidden'>
                <p className='absolute w-64 right-0 bottom-28 font-[font1] text-xs leading-tight px-4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Veridian is a digital agency that thinks every action to feed the brand — today, tomorrow, and in the years to come. Nous cherchons l'étincelle between data and emotion, between technology and human truth. That's where marketing becomes meaning.</p>
            </div>
        </div>
    )
}

export default HomeHeroText