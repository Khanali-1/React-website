import Header from './header.jsx';
import Footer from './footer.jsx';
import {Outlet} from 'react-router-dom';


function Layout(){

    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )

}


export default Layout