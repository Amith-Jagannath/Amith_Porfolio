import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Skills from "./skills/Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Divider from "./Divider";
import Loading from "./Loading";
import Education from "./Education";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(false);
    }, 10);

    return () => clearTimeout(timeout);
  });
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Herosection />
          <Divider />
          <Education />
          <Divider />
          <Skills />
          <Divider />
          <Projects />
          <Divider />
          <Contact />
          <Divider />
          <Footer />
        </>
      )}
    </>
  );
}
