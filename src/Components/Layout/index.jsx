import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

function Layout() {
  return (
    <div className='layoutContainer'>
        <Navbar/>
        <main className='main'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout;