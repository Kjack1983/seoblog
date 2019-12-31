import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="container">
                <Header/>
                    {children}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Layout;