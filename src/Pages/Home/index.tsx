import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Components/Navbar";
import style from "./style.module.css";
import Presentation from "../../Components/Presentation";
import Aboutme from "../../Components/Aboutme";
import Experience from "../../Components/Experience";
import ContactMe from "../../Components/ContactMe";
import NavbarMobile from "../../Components/Navbar/NavbarMobile";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import CopyRight from "../../Components/CopyRight";

type Props = {};

const Home = ({}: Props) => {
  const { i18n } = useTranslation(["global"]);
  const [menuActive, setMenuActive] = useState(false);
  const [language, setLanguage] = useState(false);

  const changeLanguageFunction = (leng?: string) => {
    if (!leng) {
      if (language) {
        i18n.changeLanguage("en");
        setLanguage(false);
        console.log(language);
      } else {
        i18n.changeLanguage("es");
        setLanguage(true);
        console.log(language);
      }
      return null;
    } else {
      i18n.changeLanguage(leng);
      setLanguage(leng == "es" ? true : false);
    }
  };

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  useEffect(() => {
    AOS.init({
      // Opciones globales que se aplicarán a todas las animaciones
      duration: 900, // duración de la animación en ms
      easing: "ease-in-out", // tipo de easing (curva de aceleración)
      once: true, // Si la animación debe ocurrir solo una vez al hacer scroll hacia abajo
      mirror: false, // Si la animación debe revertirse al hacer scroll hacia arriba (si once: false)
    });
    // Puedes refrescar AOS si el contenido cambia dinámicamente después de la carga inicial
    // AOS.refresh();
  }, []);
  return (
    <Suspense fallback="Loading...">
      <div className={style.home}>
        <div id="space-background">
          <div id="stars1" className="stars"></div>
          <div id="stars2" className="stars"></div>
          <div id="stars3" className="stars"></div>

          <div className="shooting-stars-container">
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
          </div>
        </div>

        <Navbar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          changeLanguageFunction={changeLanguageFunction}
        />
        <NavbarMobile
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          changeLanguageFunction={changeLanguageFunction}
          language={language}
        />
        <Presentation />
        <Aboutme />
        <Experience />
        <ContactMe />
        <CopyRight />
      </div>
    </Suspense>
  );
};

export default Home;
