import React, { useEffect, useState } from 'react'
import arrowLeft from "../../assets/icon-arrow-left.svg";
import arrowRight from "../../assets/icon-arrow-right.svg";

const PrimaryButton = ({ text = "PrimaryButton" }) => {
    const [hoverState, setHoverState] = useState(false)
    return (
        <div className='w-fit  flex  text-xl cursor-pointer text-white' onMouseEnter={() => { setHoverState(true) }} onMouseLeave={() => { setHoverState(false) }} onClick={()=>{window.location.replace('/location')}}>
            <div className={`py-[24px] px-[32px] flex font-bold justify-center items-center ${hoverState ? "bg-[#D5966C]" : "bg-[#151515]"}`}>
                {text}

            </div>
            <div className={`p-[24px] flex justify-center items-center ${!hoverState ? "bg-[#D5966C]" : "bg-[#151515]"} `}>
                <img src={arrowRight} alt="arrowRight" className='h-3' />
            </div>
        </div>
    )
}

export default PrimaryButton