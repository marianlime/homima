import * as React from 'react';
import Navbar from '../components/Navbar';

function Homepage() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="p-5">
                <h1 className="text-2xl font-bold">Welcome to Homima, your home cinema</h1>
                <p className="text-base">Use the navbar to create a room or learn more about the app</p>
            </div>
        </>
    );
}

export default Homepage;