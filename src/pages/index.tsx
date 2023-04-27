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


export default function Home() {


  return (
    <div className="min-w-full bg-background">
      <Head>
        <title>Portfolio</title>
      </Head>

      <main className="w-full">
        {/* Navigation */}
        <Navbar />
        <ParallaxProvider>
          {/* Hero */}
          <Hero />
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
