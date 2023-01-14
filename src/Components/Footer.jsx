import React from 'react'
import facebook from "../../assets/icon-facebook.svg"
import instagram from "../../assets/icon-instagram.svg"
import twitter from "../../assets/icon-twitter.svg"


const Footer = () => {
    return (
        <footer className='bg-[#151515] text-white py-[80px] px-10 flex flex-col sm:flex-row justify-between items-center'>
            <h3 className='font-bold text-5xl'>MODERN ART GALLERY</h3>
            <p className='font-bold text-xl'>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
            <div className='flex  sm:flex-row gap-3'>
                <a href="#" className='cursor-pointer hover:bg-[#D5966C]'>
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="#" className='cursor-pointer hover:bg-[#D5966C]'>
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="#" className='cursor-pointer hover:text-[#D5966C]'>
                    <img src={twitter} alt="twitter"  />
                </a>
            </div>
        </footer>
    )
}

export default Footer