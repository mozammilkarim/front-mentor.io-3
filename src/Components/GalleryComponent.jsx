import React from 'react'
import hall from "../../assets/desktop/image-grid-1.jpg"
import image2 from "../../assets/desktop/image-grid-2.jpg"
import image3 from "../../assets/desktop/image-grid-3.jpg"


const GalleryComponent = () => {
    return (
        <div className='flex flex-col sm:px-10 px-[16px] gap-5 py-5 justify-center items-center'>
            <div className='flex gap-2 sm:gap-0 justify-center items-center sm:flex-row flex-col-reverse'>
                <div className='flex flex-col gap-[32px] h-[80%] w-full  my-auto md:max-w-[350px] sm:pr-[125px]'>{/*sm:pr-[125px] md:max-w-[350px]*/}
                    <h1 className='font-[900] text-6xl text-[#151515] uppercase'>Your Day at the Gallery</h1>
                    <p className='font-[300] text-[22px] text-[#444444]'>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
                </div>
                <div className=''>
                    <img src={hall} alt="GalleryHall" />
                </div>
            </div>
            <div className='max-w-full md:grid gap-5 grid-cols-[500px_minmax(150px,_1fr)_0px] flex justify-center items-center  flex-col-reverse'>
                <div className='h-full '>
                    <img src={image2} alt="GalleryHall" />
                </div>
                <div className='flex flex-col gap-5 h-full w-full'>
                    <img src={image3} alt="GalleryHall" />
                    <div className='flex flex-col gap-[32px] h-full justify-center  lg:px-[48px] md:px-[15px] p-3 w-full  my-auto bg-[#151515]'>
                        <h1 className='font-[900] text-6xl text-white'>COME & BE INSPIRED</h1>
                        <p className='font-[300] text-[22px] text-white'>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryComponent