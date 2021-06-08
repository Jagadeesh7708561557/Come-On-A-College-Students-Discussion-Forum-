import React from 'react';
import '../css/Comeon.css'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';


function Comeon() {
    return (
        <div className = "comeon">
        <Navbar />
        <div className = "comeon_content">
        <Sidebar />
        <Feed />
        <Widget />
        </div>
        </div>
    );
}

export default Comeon;