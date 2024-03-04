'use client'
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Members from './components/Members';
import About_us from './components/About_us';



export default function Home() {
  return (
    <main >
     <NavBar />
      <Hero />  
      <About_us />
      <Members />
      
      <div className='px-32 bg-[#23272f] pt-10'><Main /></div>
      <Footer />
      

    </main >
  );
}
