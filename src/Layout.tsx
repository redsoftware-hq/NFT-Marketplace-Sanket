import { Outlet } from 'react-router-dom';
import About from './components/common/About/About';
import Navbar from './components/common/Navbar/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <About />
    </>
  );
}

export default Layout;
