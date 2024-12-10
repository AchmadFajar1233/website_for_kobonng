import { Routes, Route, Outlet } from "react-router-dom";
import App from '../App'
import Beranda from '../Pages/Beranda'
import Profile from '../Pages/Profil'
import Pendaftaran from '../Pages/Profil'
import Blog from '../Pages/Blog'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AdminBlog from "../layouts/AdminBlog";
import BlogPost from "../Pages/BlogPost";

const MainLayout = () => {
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Beranda />} />
                <Route path="profile" element={<Profile />} />
                <Route path="pendaftaran" element={<Pendaftaran />}/>
                <Route path="blog" element={<Blog />} />
            </Route>
            <Route path="admin/blog" element={<AdminBlog />}>
                <Route index element={<BlogPost />} />
            </Route>
        </Routes>
    )
}

export default AppRouter