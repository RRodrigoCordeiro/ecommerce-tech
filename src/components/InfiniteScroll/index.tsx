import { cn } from "../../lib/utils"; 
import React from "react";

export default function InfiniteScroll({
    className, 
    imgs, 
    widthImg, 
    heightMaxImg, 
    paddingLR, 
    duration, 
    maskStart, 
    maskEnd, 
    ...props
}) {
    const totalItems = imgs.length;
    const leftCalc = widthImg * totalItems;
    const keyframes = `
        @keyframes scrollLeft {
            to {
                left: ${widthImg * -1}px;
            }
        }`;

    return (
        <div
            className={cn("relative flex items-center w-full overflow-hidden", className)}
            style={{
                height: heightMaxImg,
                maskImage: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 1) ${maskStart}%,
                    rgba(0, 0, 0, 1) ${maskEnd}%,
                    rgba(0, 0, 0, 0)
                )`
            }}
            {...props}
        >
            <style>{keyframes}</style>
            {imgs.map((img, index) => {
                const scrollAnimation = `scrollLeft ${duration}s ${duration / totalItems * (totalItems - (index + 1)) * -1}s linear infinite`;

                return (
                    <div 
                        key={index}
                        className="absolute h-full flex justify-center items-center" 
                        style={{
                            left: leftCalc,
                            width: widthImg,
                            animation: scrollAnimation,
                            padding: `0px ${paddingLR}px`,
                        }}
                    >
                        <img
                            src={img.srcImagem}
                            alt={img.altImagem}
                            className="w-fit"
                            style={{
                                maxHeight: heightMaxImg
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
