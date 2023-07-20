import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


export function AppLayout() {
    return (
        <div>
            <Navbar />

            <div>
                <Outlet />
            </div>
        </div>
    )
}
