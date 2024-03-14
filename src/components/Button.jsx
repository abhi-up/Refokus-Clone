import React from "react"
import { IoIosReturnRight } from "react-icons/io"

const Button = () => {
    return (
        <div className="w-[130px] px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
            <span className="text-sm font-medium">Get Started</span>
            <IoIosReturnRight />
        </div>
    )
}

export default Button
