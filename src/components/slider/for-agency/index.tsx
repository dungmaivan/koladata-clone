'use client'
import { useCallback, useState } from 'react'

import SliderItem from '../slider-item'

const SliderForAgency = () => {
    const LIST_IMAGES_SELLER = ['agency-1.png', 'agency-2.png', 'agency-3.png']
    const LIST_TITLES = [
        'Ký hợp đồng với người sáng tạo tiềm năng',
        'Hiệu suất chính xác của nhãn hàng được chọn',
        'KOL sẵn sàng hợp tác',
        'Ký hợp đồng với người sáng tạo tiềm năng',
        'Hiệu suất chính xác của nhãn hàng được chọn',
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
            position="Agency"
            avatar="agency-avvatar.jpg"
        />
    )
}
export default SliderForAgency
