import style from "./style.module.css";
import TabbedComponent from "./TabbedComponent";
import { useTranslation } from "react-i18next";

type Props = {};

const Experience = ({}: Props) => {
  const [t] = useTranslation("global");

  return (
    <section id="experience" className={style.experience}>
      <div className={style.experienceBackground}>
        <div className={`${style.experienceContent} container`}>
          <div data-aos="fade-down" className={style.title}>
            <h2>{t("experience.title.main")}</h2>
            <span>{t("experience.title.subtitle")}</span>
          </div>

          <div className={style.tabbed}>
            <TabbedComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
