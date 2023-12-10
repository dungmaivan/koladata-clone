import Link from 'next/link'

const Header: React.FC = () => {
    return (
        <header
            className="absolute inset-x-0 top-0 z-50 h-16 items-center text-white"
            id="navbar"
        >
            <nav className="container m-auto flex h-full items-center justify-between">
                <div className="flex items-center space-x-12">
                    <Link href="/" className="text-2xl font-bold">
                        Alodata
                    </Link>
                    <Link href="/">Về chúng tôi</Link>
                    <Link href="/">Học viện</Link>
                </div>
                <div className="flex items-center space-x-9">
                    <Link href="/">
                        <button className="h-9 w-[150px] rounded-lg bg-blue-ultramarine text-sm">
                            Bảng điều khiển
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
