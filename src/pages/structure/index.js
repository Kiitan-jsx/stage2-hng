import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

export default function Structure() {
  return (
    <div className='max-w-[1440px] relative mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}