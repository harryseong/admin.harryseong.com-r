import { Outlet } from "react-router-dom";


export function AppLayout() {
    return (
        <div>
            {/* <Navbar /> */}
            <Outlet />
        </div>
    )
}
