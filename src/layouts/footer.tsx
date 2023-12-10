import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1D2029]">
            <div className="container py-8">
                <div className="mx-auto md:max-w-[1216px]">
                    <hr className="mb-8 h-[1px] border-[#414141]" />

                    <p className="text-center text-xs font-normal not-italic leading-6 text-[#9CA3AF] no-underline md:text-base">
                        © 2023{' '}
                        <Link href="/" className="font-medium underline">
                            Alodata
                        </Link>{' '}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
