import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import NavItem from "./NavItem";
import { useRouter } from "next/navigation";
const MENU_LIST = [
  { text: "Home", href: "/" },

  { text: "Projects", href: "/projects" },
  { text: "Skills", href: "/skills" },
  { text: "Contact", href: "/contact" },
];
function Navbar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header>
      <nav className={currentTheme === "light" ? "lighttheme" : "darktheme"}>
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
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
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
          {currentTheme === "dark" ? (
            <button
              className="bg-black-700 hover:bg-black w-16 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme("light")}
            >
              {" "}
              <Image src="/sun.svg" alt="logo" height={25} width={25} />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-16 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme("dark")}
            >
              <Image src="/moon.svg" alt="logo" height={25} width={25} />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
