import React, { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Customcursor from "./Components/Customcursor";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contactme from "./Pages/Contactme";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Rings
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Sidebar />

      {/* SINGLE PAGE SCROLL */}
      <main className="ml-0 md:ml-20 pb-16 md:pb-0">
        <section id="home"><Home /></section>
        <section id="about"><Aboutme /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contactme /></section>

        {/* FOOTER ONLY ONCE */}
        <Footer />
      </main>

      <Customcursor />
    </div>
  );
}

export default App;