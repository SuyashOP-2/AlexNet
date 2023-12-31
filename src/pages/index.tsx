import Head from "next/head";
import Email from "@/components/Email";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";

function Index() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [showContent, setShowContent] = useState(true);

  // const handleLoaderLoaded = () => {
  //   setIsLoading(false);
  //   setTimeout(() => setShowContent(true), 450);
  // };

  return (
    <div className="app">
      <Head>
        <title>Suyash Shirtar</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            {/* <Experience /> */}
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )
      {/* <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} /> */}
    </div>
  );
}

export default Index;
