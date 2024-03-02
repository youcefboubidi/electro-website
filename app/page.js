'use client'
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="px-24 py-4">
      <NavBar />
      <Hero />
      <Main />
      <Footer />

    </main >
  );
}
