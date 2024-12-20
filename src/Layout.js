import React from "react";
import AppRoutes from "./Routes";
// import Skills from "./components/Skills";
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