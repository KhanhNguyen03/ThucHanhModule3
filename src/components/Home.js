
import {Navbar} from "./Navbar";
import {Outlet} from "react-router-dom";

export function Home(){


    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}