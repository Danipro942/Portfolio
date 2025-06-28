import { useState, useEffect } from "react";
import style from "./style.module.css";
import DarkMode from "../DarkMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from "react-i18next";

type Props = {
  setMenuActive: (active: boolean) => void;
  menuActive: boolean;
  changeLanguageFunction: () => void;
};

const Navbar = ({
  setMenuActive,
  menuActive,
  changeLanguageFunction,
}: Props) => {
  const [t] = useTranslation("global");

  const [isNightMode, setIsNightMode] = useState(true);
  const [activeSection, setActiveSection] = useState(""); // State to keep track of the active section

  // Effect to handle the scroll event and toggle the active class on the navbar
  // This effect adds a scroll event listener to the window and toggles the active class
  // based on the scroll position. When the user scrolls down, the active class is added,

  useEffect(() => {
    const navbar = document.querySelector(`.${style.navbarContainer}`);
    const navbarR = document.querySelector(`.${style.navbarContainerR}`);

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
        navbarR?.classList.add(style.active);
      } else {
        navbar?.classList.remove(style.active);
        navbarR?.classList.remove(style.active);
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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 940);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 940);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop ? (
    <div className={`${style.navbarContainer} ${style.active}`}>
      <div className={`${style.navbar} `}>
        <div className={style.menu}>
          <ul>
            <a
              href="#home"
              className={activeSection === "home" ? style.activeLink : ""}
            >
              {t("navbar.menu.home")}
            </a>
            <a
              href="#aboutme"
              className={activeSection === "aboutme" ? style.activeLink : ""}
            >
              {t("navbar.menu.aboutme")}
            </a>
            <a
              href="#experience"
              className={activeSection === "experience" ? style.activeLink : ""}
            >
              {t("navbar.menu.experience")}
            </a>

            <a
              href="#contactme"
              className={activeSection === "contactme" ? style.activeLink : ""}
            >
              {t("navbar.menu.contact")}
            </a>
          </ul>
        </div>

        <div className={style.other} onClick={() => changeLanguageFunction()}>
          <DarkMode setIsNightMode={setIsNightMode} isNightMode={isNightMode} />
        </div>
      </div>
    </div>
  ) : (
    <div className={`${style.navbarContainerR} `}>
      <div className={style.logo}>
        <h2>
          Daniel <span>Hinestroza </span>
        </h2>
      </div>

      <div className={style.menu}>
        <i onClick={() => setMenuActive(!menuActive)}>
          <GiHamburgerMenu />
        </i>
      </div>
    </div>
  );
};

export default Navbar;
