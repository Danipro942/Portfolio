import { useEffect, useState } from "react";
import style from "./style.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Spanish from "../../../assets/flags/spanish.svg";
import English from "../../../assets/flags/english.png";

type Props = {
  setMenuActive: (active: boolean) => void;
  menuActive: boolean;
  changeLanguageFunction: (leng: string) => void;
  language: boolean;
};

const NavbarMobile = ({
  menuActive,
  language,
  setMenuActive,
  changeLanguageFunction,
}: Props) => {
  const [t] = useTranslation("global");

  const [activeSection, setActiveSection] = useState(""); // State to keep track of the active section

  // Effect to handle the scroll event and toggle the active class on the navbar
  // This effect adds a scroll event listener to the window and toggles the active class
  // based on the scroll position. When the user scrolls down, the active class is added,
  useEffect(() => {
    const navbar = document.querySelector(`.${style.navbarContainer}`);

    const handleScroll = () => {
      const sections = ["home", "aboutme", "experience", "contactme"]; // Add your section IDs here
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(sectionId);
            break; // Stop once the active section is found
          }
        }
      }

      if (window.scrollY > 0) {
        navbar?.classList.add(style.active);
      } else {
        navbar?.classList.remove(style.active);
      }
    };

    window.addEventListener("scroll", () => {
      handleScroll();
      // console.log(activeSection);
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        onClick={() => setMenuActive(false)}
        className={`${style.closenav} ${menuActive ? style.bgActive : ""}`}
        style={{ display: menuActive ? "block" : "none" }}
      ></div>

      <nav className={`${style.navM} ${menuActive ? style.active : ""}`}>
        <div className={style.logo}>
          <h2>
            Daniel <span>Hinestroza </span>
          </h2>
        </div>
        <div className={style.menu}>
          <ul>
            <a
              onClick={() => setMenuActive(false)}
              href="#home"
              className={activeSection === "home" ? style.activeLink : ""}
            >
              <i>
                <IoHomeOutline />
              </i>{" "}
              <span>{t("navbar.menu.home")}</span>
            </a>
            <a
              onClick={() => setMenuActive(false)}
              href="#aboutme"
              className={activeSection === "aboutme" ? style.activeLink : ""}
            >
              <i>
                <BsPerson />
              </i>
              <span>{t("navbar.menu.aboutme")}</span>
            </a>
            <a
              onClick={() => setMenuActive(false)}
              href="#experience"
              className={activeSection === "experience" ? style.activeLink : ""}
            >
              <i>
                <BsSuitcaseLg />
              </i>
              <span>{t("navbar.menu.experience")}</span>
            </a>
            <a
              onClick={() => setMenuActive(false)}
              href="#contactme"
              className={activeSection === "contactme" ? style.activeLink : ""}
            >
              <i>
                <IoCallOutline />
              </i>
              <span>{t("navbar.menu.contact")}</span>
            </a>
          </ul>
        </div>
        <div className={style.languages}>
          <span>Languages</span>
          <div className={`${style.langaugesbutton} `}>
            <button
              className={`${language ? style.activeLink : ""}`}
              onClick={() => changeLanguageFunction("es")}
            >
              <img src={Spanish} alt="Cambiar Lenguaje a Espanol" />
            </button>
            <button
              onClick={() => changeLanguageFunction("en")}
              className={`${!language ? style.activeLink : ""}`}
            >
              <img src={English} alt="Change Language to English" />
            </button>
          </div>
        </div>
        <div className={style.media}>
          <a href="">
            <RiTwitterXFill />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarMobile;
