import React from 'react';
import './App.css'
import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer/footer";
import Pasting from "./pages/pasting";

const App = () => {
    return (
        <div>
            <Header />
            <div className={'content'}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Home />} />
                        <Route path={'/pasting'} element={<Pasting />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>

        </div>
    );
};

export default App;