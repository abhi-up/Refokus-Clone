import React from "react"

const Marquee = ({ imagesUrl }) => {
    return (
        <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
            {imagesUrl.map((url, index) => (
                <img key={index} src={url} className="flex-shrink-0 w-[6vw]" />
            ))}
            {imagesUrl.map((url, index) => (
                <img key={index} src={url} className="flex-shrink-0 w-[6vw]" />
            ))}
        </div>
    )
}

export default Marquee
