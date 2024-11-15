import { Outlet } from "react-router-dom";
import Navbar from '../pageRoutes/Navbar';
import Footer from "../pageRoutes/Footer";

export default function Layout() {
    return (
        <> 
        <div className="site-wrapper">
            <Navbar />
            <main className="main-content-wrapper">
                <Outlet />
            </main>
        </div>
        <Footer />
        </>

    )
}