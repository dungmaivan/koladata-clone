import Footer from './footer'
import Header from './header'

const LandingLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default LandingLayout
