import React from 'react';
import Navbar from '../components/Navbar';

function AboutPage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="text-base">
          This app allows you to create and join cinema rooms to watch videos together.
        </p>
      </div>
    </>
  );
}

export default AboutPage;