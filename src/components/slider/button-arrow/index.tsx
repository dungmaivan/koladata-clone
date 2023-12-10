import Image from 'next/image'
import React from 'react'
import type { CustomArrowProps } from 'react-slick'

interface Props extends CustomArrowProps {
    arrowClass?: string
}
export const Arrow: React.FC<Props> = ({ arrowClass, ...rest }) => {
    return (
        <div {...rest}>
            <div
                className={`absolute top-1/2 h-9 w-9 -translate-y-1/2 cursor-pointer ${arrowClass} z-10`}
            >
                <Image
                    width={35}
                    height={35}
                    alt=""
                    src="/images/home/arrow.png"
                />
            </div>
        </div>
    )
}
