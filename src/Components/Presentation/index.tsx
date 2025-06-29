import style from "./style.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

import Typewriter from "typewriter-effect";

import Lottie from "lottie-react";
import animationData from "../../assets/animation/home-animation.json";

import { useTranslation } from "react-i18next";

type Props = {};

const Presentation = ({}: Props) => {
  const [t] = useTranslation("global");

  return (
    <section id="home" className={`${style.home} container`}>
      <div className={style.homeInfo}>
        <div data-aos="fade-down" className={style.info}>
          <div className={style.homeName}>
            <div>
              <div className="gradient-objects">
                <span>Daniel</span>
              </div>
            </div>

            <div>
              <div className="gradient-objects">
                <span>Hinestroza</span>
              </div>
            </div>
          </div>
          <div className={style.typewriterContainer}>
            <Typewriter
              options={{
                strings: [
                  t("presentation.Typewriter.webdeveloper"),
                  t("presentation.Typewriter.datascientist"),
                  t("presentation.Typewriter.aienthusiast"),
                ],
                autoStart: true,
                loop: true,
                delay: 120,
                deleteSpeed: 50,
              }}
            />
          </div>
          <p>{t("presentation.description")}</p>
          <div className={style.mediaButton}>
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/daniel-felipe-hinestroza-47969234a/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className={`${style.gradientObjectButtons}`}
            >
              <div>
                <FaLinkedinIn />
              </div>
            </div>

            <div
              onClick={() =>
                window.open(
                  "https://github.com/Danipro942",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className={`${style.gradientObjectButtons}`}
            >
              <div>
                <FaGithub />
              </div>
            </div>

            <div
              onClick={() =>
                window.open(
                  "https://x.com/DanistTH",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className={`${style.gradientObjectButtons}`}
            >
              <div>
                <FaXTwitter />
              </div>
            </div>
          </div>
          <div className={style.options}>
            <button
              onClick={() => {
                const section = document.getElementById("experience");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <i>
                <FaRegFileCode />
              </i>
              {t("presentation.buttons.button1")}
            </button>

            <button
              onClick={() => {
                const section = document.getElementById("contactme");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <i>
                <LuSend />
              </i>
              {t("presentation.buttons.button2")}
            </button>
          </div>
        </div>

        <div className={style.photoContainer} data-aos="zoom-in">
          <div className="gradient-objects">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
