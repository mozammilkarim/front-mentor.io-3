import React from 'react'
import map from "../../assets/desktop/image-map.png"
import Footer from './Footer'
import SecondaryButton from './SecondaryButton'
const LocationDetail = () => {
    return (
        <div className='sm:px-[165px] bg-[#151515] text-white sm:pt-[104px] pt-[48px] pb-[56px] px-[16px] sm:pb-[128px] flex flex-col sm:flex-row justify-between  p-5 sm:gap-3 gap-0'>
            <h1 className='font-[900] text-7xl text-start'>OUR LOCATION</h1>
            <div className='flex flex-col  justify-start items-start'>
                <h3 className='text-[#D5966C] font-[900] text-4xl '>99 King Street</h3>
                <div className='flex flex-col gap-3 mt-[24px]  font-[300] text-xl'>
                    <p>Newport </p>
                    <p>RI 02840</p>
                    <p>United States of America</p>
                </div>
                <p className='font-[300] text-xl max-w-[540px] mt-[32px]'>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
            </div>
        </div>
    )
}
const Location = () => {
    return (
        <div>
            <div className='relative w-full'>
                <div className='absolute left-[10%]'>

                    <SecondaryButton text='BACK TO HOME' />
                </div>
                <img src={map} alt="our Location" className='w-full' />
            </div>
            <LocationDetail/>
            <Footer bgColor='#D5966C' iconClass='locationIcon' textColor='#151515' />
        </div>
    )
}

export default Location