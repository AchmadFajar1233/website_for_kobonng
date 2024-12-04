import { createBrowserRouter } from 'react-router'
import App from '../App'
import Beranda from '../Pages/Beranda'
import Profile from '../Pages/Profil'
import Pendaftaran from '../Pages/Profil'
import Blog from '../Pages/Blog'

const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <Beranda />
        },
        {
            path: '/profile',
            element: <Profile />
        },
        {
            path: '/pendaftaran',
            element: <Pendaftaran />
        },
        {
            path: '/blog',
            element: <Blog />
        }
    ]
}])

export default router