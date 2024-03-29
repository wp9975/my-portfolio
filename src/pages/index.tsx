import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { ParallaxProvider } from "react-scroll-parallax";
import LandingSection from "@/components/landing/LandingSection";


export default function Home() {
  return (
    <div className="w-full bg-background">
      <Head>
        <title>Portfolio</title>
      </Head>

      <main id="main" className="w-full">
        {/* Navigation */}
        <Navbar />
        <div className="h-20"></div>
        <ParallaxProvider>
          {/* Hero */}
            {/* <Hero /> */}
            <LandingSection/>
          {/* About */}
          <About />
          {/* Experience */}
          <Skills />

          {/* Projects */}
          <Projects />
          {/* Contact Me */}
          <ContactMe />
          <Footer />
        </ParallaxProvider>
        {/* Footer */}
      </main>
    </div>
  );
}
