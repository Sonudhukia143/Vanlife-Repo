import { Outlet } from "react-router-dom";
import HostNavbar from "../pageRoutes/hostPageRoutes/HostNavbar";

export default function HostLayout() {
    return (
        <>
            <HostNavbar />
            <Outlet />
        </>
    )
}

