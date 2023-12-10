'use client'
import { useCallback, useState } from 'react'

import SliderItem from '../slider-item'

const SliderForSeller = () => {
    const LIST_IMAGES_SELLER = [
        'seller-01.png',
        'seller-02.png',
        'seller-03.png',
    ]
    const LIST_TITLES = [
        'Thị trường tiềm năng nhất',
        'Mục tiêu học tập trong danh mục cấp độ 3',
        'KOL sẵn sàng hợp tác',
        'Thị trường tiềm năng nhất',
        'Mục tiêu học tập trong danh mục cấp độ 3',
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
            titleFisrt
            position="Nhà bán hàng"
            avatar="seller-avatar.png"
        />
    )
}
export default SliderForSeller
