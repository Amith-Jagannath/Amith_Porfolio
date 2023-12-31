import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const [isDarkMode, setIsDarkMode] = useState(true);
  console.log(isDarkMode);
  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem("darkMode");
    setIsDarkMode(isDarkMode === true);
  }, []);
  console.log(isDarkMode);

  const updateDarkMode = (isDarkMode) => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      // root.classList.add("dark");
      document.documentElement.classList.add("dark");
    } else {
      // root.classList.remove("dark");
      document.documentElement.classList.remove("dark");
    }
  };
  const toggleDarkMode = () => {
    const updatedValue = !isDarkMode;
    setIsDarkMode(updatedValue);
    localStorage.setItem("darkMode", updatedValue);
    updateDarkMode(updatedValue);
  };

  return (
    <header className="bg-gray-200 dark:bg-zinc-900">
      <nav className="text-black dark:text-white">
        <Link legacyBehavior href={"/"}>
          <a>
            <h1 className="logo">Amith JS</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div className="dark:bg-white"></div>
          <div className="dark:bg-white"></div>
          <div className="dark:bg-white"></div>
        </div>

        {/* dont chhange */}

        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          <Link legacyBehavior href="#Herosection">
            <a className="nav__item">Home</a>
          </Link>
          <Link legacyBehavior href="#Skills">
            <a className="nav__item">Skills</a>
          </Link>
          <Link legacyBehavior href="#Education">
            <a className="nav__item">Education</a>
          </Link>
          <Link legacyBehavior href="#Projects">
            <a className="nav__item">Projects</a>
          </Link>
          <Link legacyBehavior href="#Contact">
            <a className="nav__item">Contact</a>
          </Link>
          <a href="Resume.pdf" download>
            <div className="flex gap-2">
              <span>Resume</span>
              <svg
                className="fill-current mt-1 w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
            </div>
          </a>
        </div>

        {/* dont change it */}

        <div className="flex justify-center">
          <button
            className="w-16 rounded-md  border-2 p-4 "
            onClick={() => toggleDarkMode()}
          >
            <Image
              src={isDarkMode ? "/sun.svg" : "/moon.svg"}
              alt="logo"
              height={25}
              width={25}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
