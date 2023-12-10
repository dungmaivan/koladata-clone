'use client'
import Image from 'next/image'
import React from 'react'
import type { Settings } from 'react-slick'
import Slider from 'react-slick'

import GetStart from '@/components/ui/button-get-start'

import { Arrow } from '../button-arrow'
interface Props {
    listImage: string[]
    listTitle: string[]
    index: number
    setIndex: (val: number) => void
    titleFisrt?: boolean
    position: string
    avatar: string
}
const SliderItem: React.FC<Props> = ({
    index,
    listImage,
    listTitle,
    setIndex,
    titleFisrt,
    position,
    avatar,
}) => {
    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Arrow arrowClass="rotate-180" />,
        nextArrow: <Arrow arrowClass="right-0" />,
        afterChange(currentslide) {
            setIndex(currentslide)
        },
    }

    return (
        <div className="bg-[#f7f9fc]">
            <div className="container mx-4 md:mx-auto">
                <div className="flex justify-between  pl-7 pt-9 ">
                    <div
                        className={`${
                            titleFisrt ? 'order-1' : 'order-3'
                        } flex h-[260px] flex-col justify-between font-medium`}
                    >
                        <div>
                            <p className="text-[44px] text-[#06060f] ">
                                Nếu bạn là một{' '}
                                <span className="whitespace-nowrap text-blue-ultramarine">
                                    {position}
                                </span>
                            </p>
                            <p className="text-[44px] text-[#06060f]">
                                Bạn có thể tìm hiểu
                            </p>
                        </div>
                        <div className="flex h-10 w-full items-center justify-center space-x-2 rounded-full bg-white">
                            <div className="h-2 w-[2px] bg-blue-ultramarine" />
                            <p className="font-medium">{listTitle[index]}</p>
                            <div className="h-2 w-[2px] bg-blue-ultramarine" />
                        </div>
                    </div>
                    <div className="order-2 flex h-[260px] flex-col justify-between">
                        <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full object-cover">
                            <Image fill alt="" src={`/images/home/${avatar}`} />
                        </div>
                        <GetStart classButton="text-white bg-blue-ultramarine" />
                    </div>
                </div>
                <div className="relative mt-6 max-w-[1200px] overflow-hidden">
                    <Slider {...settings}>
                        {listImage.map(item => {
                            return (
                                <div className="bg-transparent" key={item}>
                                    <Image
                                        src={`/images/home/${item}`}
                                        width={1000}
                                        height={542}
                                        alt=""
                                        className="mx-auto rounded-[20px]"
                                        quality={100}
                                    />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default SliderItem
