import React from 'react'
import artist from "../../assets/desktop/image-hero.jpg"
import PrimaryButton from './PrimaryButton'

const TextSection = () => {
    return (
        <div className='lg:min-w-[350px] gap-[32px] md:gap-0 flex flex-col  justify-center static p-3 md:p-0 md:relative right-10'>
            <h1 className='md:text-7xl text-6xl  font-[900]  lg:hidden text-[#151515]'>MODERN
                ART GALLERY</h1>
            <p className='text-[#444444] text-2xl font-normal mb-0 md:mb-[64px]'>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
            <PrimaryButton text='OUR LOCATION' />
        </div>
    )
}

const TopSection = () => {
    return (
        <div className='relative' >

            <div className='absolute top-0 left-0 sm:w-[80%] w-full flex '>
                <div className='bg-black  lg:w-[40%] w-0 relative'>

                    <div className='text-9xl w-full font-[900] lg:block absolute hidden text-white top-[20%] left-[50%]'>
                        <h1 style={{ background: "linear-gradient(to right, rgba(255, 215, 255, 0) 0%, rgba(225, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0) 61%), linear-gradient(rgb(97, 183, 217) 52%, rgb(224, 246, 255) 60%, rgb(78, 99, 132) 61%)" }}>

                            MODERN
                        </h1>
                        <h1 className='!break-keep w-full'>
                            ART GALLERY
                        </h1>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col'>
                    <img src={artist} alt="artist" className='lg:w-[70%] w-full' />
                    <div className='static md:absolute top-[30%] md:left-[70%] lg:w-[50%]'>

                        <TextSection />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopSection