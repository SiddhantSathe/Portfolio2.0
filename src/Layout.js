import React from "react";
import { Router } from "react-router-dom";
import AppRoutes from "./Routes";
// import Skills from "./components/Skills";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Props from "./Props";

function Layout(){
    return(
        <div>
            <AppRoutes/>
            <Props/>
            {/* <Banner/> */}
            {/* <Skills/> */}
            <Contact/>
        </div>
    )
}

export default Layout;