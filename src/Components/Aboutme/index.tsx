import style from "./style.module.css";
import Portrait from "./AnimatedPortrait";
import { PiShootingStarLight } from "react-icons/pi";
import { IoMdDownload } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoHappyOutline } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";
import Spanish from "../../assets/flags/spanish.svg";
import English from "../../assets/flags/english.png";
import Card from "./Card";
import { useTranslation } from "react-i18next";

import ME from "../../assets/img/me2.png";

type Props = {};

const Aboutme = ({}: Props) => {
  const [t] = useTranslation("global");

  return (
    <section id="aboutme" className={`${style.aboutmeSection}`}>
      <div className={`${style.aboutmeBackground}`}>
        <div className={`${style.aboutmeContent}`}>
          <div className={`${style.aboutme} container`}>
            <div data-aos="fade-down" className={style.title}>
              <h1>{t("aboutme.title.main")}</h1>
              <div className="gradient-objects">
                <span>
                  <i>
                    <PiShootingStarLight />
                  </i>
                  {t("aboutme.title.subtitle")}
                  <i>
                    <PiShootingStarLight />
                  </i>
                </span>
              </div>
            </div>

            <div className={style.myself}>
              <div data-aos="fade-right" className={style.profile}>
                <div className="gradient-objects-animation">
                  <Portrait imageSrc={ME} />
                </div>
              </div>

              <div data-aos="fade-left" className={style.description}>
                <h3>
                  {t("aboutme.description.name")}{" "}
                  <span>{t("aboutme.description.role")}</span>
                </h3>

                <p>
                  {t("aboutme.description.paragraph1")} <br />
                  {t("aboutme.description.paragraph2")} <br />
                  {t("aboutme.description.paragraph3")}
                </p>
              </div>
              <div data-aos="fade-down" className={style.downloadButton}>
                <button>
                  {" "}
                  <i>
                    <IoMdDownload />
                  </i>
                  {t("aboutme.download_cv")}
                </button>
              </div>
            </div>
            <div className={style.cardList}>
              <Card
                title={t("aboutme.cards.experience.title")}
                icon={
                  <>
                    <PiSuitcaseSimpleBold />
                  </>
                }
                cardInfo={[
                  {
                    title: t("aboutme.cards.experience.frontend"),
                    time: "6 Years",
                    bgColor:
                      "linear-gradient(to right,rgba(0, 225, 255, 0.1),rgba(0, 102, 255, 0.11))",
                  },

                  {
                    title: t("aboutme.cards.experience.backend"),
                    time: "4 Years",
                    bgColor: "#41414114",
                  },

                  {
                    title: t("aboutme.cards.experience.data_science_ai"),
                    time: "1 Year",
                    bgColor: "#41414114",
                  },
                ]}
              />

              <Card
                delayanimation={500}
                title={t("aboutme.cards.qualities.title")}
                bgColor="#27939d0f"
                icon={
                  <>
                    <IoHappyOutline />
                  </>
                }
                cardInfo={[
                  {
                    title: t("aboutme.cards.qualities.dreamer"),
                    time: "",
                    bgColor:
                      "linear-gradient(to right, rgb(0 255 147 / 10%), rgba(0, 102, 255, 0.11))",
                  },

                  {
                    title: t("aboutme.cards.qualities.creative"),
                    time: "",
                    bgColor: "#41414114",
                  },

                  {
                    title: t("aboutme.cards.qualities.problem_solver"),
                    time: "",
                    bgColor: "#41414114",
                  },
                ]}
              />

              <Card
                delayanimation={1000}
                title={t("aboutme.cards.languages.title")}
                bgColor="rgb(39 118 157 / 14%)"
                icon={
                  <>
                    <MdOutlineLanguage />
                  </>
                }
                cardInfo={[
                  {
                    title: (
                      <div className={style.flag}>
                        <img src={English} alt="English Flag" />
                        {t("aboutme.cards.languages.english")}
                      </div>
                    ),
                    time: t("aboutme.cards.languages.fluent"),
                    bgColor:
                      "linear-gradient(to right, rgb(0 255 147 / 10%), rgba(0, 102, 255, 0.11))",
                  },

                  {
                    title: (
                      <div className={style.flag}>
                        <img src={Spanish} alt="Spanish Flag" />
                        {t("aboutme.cards.languages.spanish")}
                      </div>
                    ),
                    time: t("aboutme.cards.languages.native"),
                    bgColor: "#41414114",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
