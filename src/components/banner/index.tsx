import Image from 'next/image'

const Banner = () => {
    return (
        <div className="relative h-screen bg-blue-ultramarine">
            <div className="container mx-auto items-start py-[200px]">
                <div className="max-w-[560px] text-white">
                    <h1 className="pb-7 text-5xl font-bold leading-[55px]">
                        Bùng nổ doanh số bán hàng TikTok cùng{' '}
                        <span className="text-[#ffc24a]">Alodata</span>
                    </h1>
                    <p className="pb-16 text-3xl leading-[47px] opacity-80">
                        Công cụ phân tích chỉ số kinh doanh TikTok số 1
                    </p>
                    <button className="h-[50px] w-48 rounded-lg bg-white text-lg font-medium text-blackcurrant hover:text-blue-600">
                        Bắt đầu dùng thử
                    </button>
                </div>
            </div>
            <div className="absolute right-0 top-0 h-screen w-1/2">
                <div className="relative h-screen w-auto min-w-[740px]">
                    <Image fill alt="" src="/images/banner-image.png" />
                </div>
            </div>
        </div>
    )
}
export default Banner
