'use client'
import { useCallback, useState } from 'react'

import SliderItem from '../slider-item'

const SliderForContentCreator = () => {
    const LIST_IMAGES_SELLER = [
        'creator-1.png',
        'creator-2.png',
        'creator-3.png',
    ]
    const LIST_TITLES = [
        'Sản phẩm tiếp thị liên kết hot nhất với 360 dữ liệu',
        'Mục tiêu học tập với phong cách tương đương',
        'Xu hướng videos và livestreams',
        'Sản phẩm tiếp thị liên kết hot nhất với 360 dữ liệu',
        'Mục tiêu học tập với phong cách tương đương',
    ]
    const [index, setIndex] = useState(0)
    const handleChange = useCallback((val: number) => {
        setIndex(val)
    }, [])
    return (
        <SliderItem
            listImage={LIST_IMAGES_SELLER}
            index={index}
            listTitle={LIST_TITLES}
            setIndex={handleChange}
            position="Nhà sáng tạo"
            avatar="conten-creator.jpg"
        />
    )
}
export default SliderForContentCreator
