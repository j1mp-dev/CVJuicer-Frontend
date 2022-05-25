import React from "react";
import Navbar from "../components/Navbar";
import Button from '@mui/material/Button';
import "../styles/pages/main-page.css";

function MainPage() {
    return (
        <div>
            <Navbar></Navbar>
            <div class="create-cv-block">
                <Button variant="contained" disableElevation>
                    Criar curriculo
                </Button>
            </div>
        </div>
    )
}

export default MainPage;