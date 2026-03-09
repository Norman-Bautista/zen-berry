import { Outlet } from "@tanstack/react-router";

 

 export default function rootLayout() {
    return (
        <div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}