import Image from 'next/image'

const ClientStrustAlodata = () => {
    return (
        <div className="container items-center space-y-5 pb-[50px] pt-[30px]">
            <div className="relative mx-auto h-[50px] w-[50px]">
                <Image fill alt="" src="/images/navIcon.png" />
            </div>
            <div className="mx-auto w-[600px] text-center text-3xl leading-[50px] text-blackcurrant">
                Hơn 500,000,000+ Sellers, Creators, Agencies đang tin dùng
                Alodata
            </div>
            <div className="mx-auto flex h-[50px] w-[460px] space-x-2 overflow-hidden rounded-lg border-2 border-[#a6a9ff]">
                <button className="my-auto h-full w-full flex-1 bg-[#f6f9fa] text-center hover:text-blue-600">
                    Nhà bán hàng
                </button>
                <button className="my-auto h-full w-full flex-1 bg-[#f6f9fa] text-center hover:text-blue-600">
                    Nhà sáng tạo
                </button>
                <button className="my-auto h-full w-full flex-1 bg-[#f6f9fa] text-center hover:text-blue-600">
                    Agency
                </button>
            </div>
        </div>
    )
}
export default ClientStrustAlodata
