import React from "react";
import "../styles/components/navbar.css"
import Link from '@mui/material/Link';


function Navbar() {
    return ( 
        <div class="navbar">
            
                <h1 class="logo"><Link href="/">CVJUICER</Link></h1>
            
        </div>
     );
}

export default Navbar;