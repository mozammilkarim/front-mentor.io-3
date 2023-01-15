import React, { useEffect, useState } from 'react'
import arrowLeft from "../../assets/icon-arrow-left.svg";

const SecondaryButton = ({ text = "SecondaryButton" }) => {
    const [hoverState, setHoverState] = useState(false)
    return (
        <div className='flex  text-xl cursor-pointer text-white' onMouseEnter={() => { setHoverState(true) }} onMouseLeave={() => { setHoverState(false) }} onClick={()=>{window.location.replace('/')}}>
            <div className={`p-2  flex justify-center items-center ${!hoverState ? "bg-[#D5966C]" : "bg-[#151515]"} `}>
                <img src={arrowLeft} alt="arrowLeft" className='h-3' />
            </div>
            <div className={`p-2 flex font-bold justify-center items-center ${hoverState ? "bg-[#D5966C]" : "bg-[#151515]"}`}>
                {text}

            </div>
        </div>
    )
}

export default SecondaryButton