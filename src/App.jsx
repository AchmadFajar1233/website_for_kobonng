import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <div className="overflow-x-hidden min-h-screen relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
