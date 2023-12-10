'use client'
import Image from 'next/image'

interface Props {
    bgImage: string
    title: string
    details: string
}

const Item: React.FC<Props> = ({ bgImage, title, details }) => {
    return (
        <div className="group min-h-[500px] max-w-[285px] rounded-3xl bg-white p-5 hover:bg-blue-ultramarine hover:text-white">
            <div className="relative mx-auto h-44 w-44">
                <Image alt="" fill src={`/images/home/${bgImage}.png`} />
            </div>
            <p className="pb-5 pt-[30px] text-center text-blackcurrant group-hover:text-white">
                {title}
            </p>
            <p className="pt-3 text-center text-blackcurrant group-hover:text-white">
                {details}
            </p>
        </div>
    )
}
export default Item
