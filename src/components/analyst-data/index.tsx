import GetStart from '../ui/button-get-start'
import Item from './item'

const AnalystData = () => {
    return (
        <div className="bg-[#ffb523] py-20">
            <div className="container mx-auto">
                <h1 className="mx-auto max-w-[800px] text-center text-[44px] font-medium text-white">
                    Phân tích dữ liệu chính xác nhất mà bạn chưa từng thấy ở bất
                    kỳ đâu
                </h1>
                <div className="flex justify-center py-10">
                    <GetStart classButton="bg-white hover:text-blue-ultramarine" />
                </div>
                <div className="flex space-x-5">
                    <Item
                        bgImage="five01"
                        title=" Chân dung người theo dõi của người sáng tạo"
                        details="Dựa trên độ tuổi, sở thích,… của người theo dõi để
                            tìm ra người sáng tạo phù hợp hơn"
                    />
                    <Item
                        bgImage="five2"
                        title="Phân tích tài khoản cạnh tranh"
                        details="Kiểm tra hiệu suất hằng ngày của tài khoản Tiktok trên thị trường"
                    />
                    <Item
                        bgImage="five03"
                        title="Lựa chọn đa nền tảng"
                        details="Tìm ra các danh mục và sản phẩm đang thịnh hành trên các nền tảng"
                    />
                    <Item
                        bgImage="five04"
                        title="Tự động đề xuất sản phẩm"
                        details="Đề xuất cho người sáng tạo các phong cách và tài khoản phù hợp với họ"
                    />
                </div>
            </div>
        </div>
    )
}
export default AnalystData
