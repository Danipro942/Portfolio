import { useState } from "react";
import styles from "./style.module.css";
import HTMLLOGO from "../../../../../assets/icons/HTML.png";
import CSSLOGO from "../../../../../assets/icons/CSS.png";
import TSLOGO from "../../../../../assets/icons/TS.png";
import FigmaLogo from "../../../../../assets/icons/Figma.svg";
import JavaScriptLogo from "../../../../../assets/icons/JS.png";
import NextJSLOGO from "../../../../../assets/icons/nextjs.png";
import GithubLOGO from "../../../../../assets/icons/github.png";
import Apolo from "../../../../../assets/icons/apollo.png";
import NodeJS from "../../../../../assets/icons/nodejs.png";
import ExpressLogo from "../../../../../assets/icons/expressjs.png";
import NOSQLLogo from "../../../../../assets/icons/nosql.png";
import mongoDBLogo from "../../../../../assets/icons/mongodb.png";
import MongooseLogo from "../../../../../assets/icons/mongoose.png";
import GitLOgo from "../../../../../assets/icons/GIT.png";
import PythonLogo from "../../../../../assets/icons/Python.webp";
import NumpyLogo from "../../../../../assets/icons/Numpy.png";
import Matplotlib from "../../../../../assets/icons/Matplotlib.png";
import ReactLogo from "../../../../../assets/icons/React.png";
import { useTranslation } from "react-i18next";

type Props = {};

const TabbedSkills = ({}: Props) => {
  const [t] = useTranslation("global");

  const [activeTab, setActiveTab] = useState("languages");
  const tabsData = [
    {
      id: "languages",
      label: t("experience.skills.languages"),
      content: (
        <>
          <div className={`${styles.SkillList}`}>
            <img src={JavaScriptLogo} alt="Javascript Logo" />
            <span>JavaScript</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={TSLOGO} alt="TypeScript Logo" />
            <span>TypeScript</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  `}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={PythonLogo} alt="Python Logo" />
            <span>Python</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div
                className={`${styles.circle}  ${styles.activeCircle} `}
              ></div>
              <div className={`${styles.circle}  `}></div>
            </div>
          </div>
        </>
      ),
    },

    {
      id: "front-end",
      label: t("experience.skills.frontend"),
      content: (
        <>
          <div className={`${styles.SkillList}`}>
            <img src={HTMLLOGO} alt="HTML Logo" />
            <span>HTML</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={NextJSLOGO} alt="NEXTJS Logo" />
            <span>NEXT.JS</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  `}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={TSLOGO} alt="TypeScript Logo" />
            <span>TypeScript</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div
                className={`${styles.circle}  ${styles.activeCircle} `}
              ></div>
              <div className={`${styles.circle}  `}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={GithubLOGO} alt="Github Logo" />
            <span>Github</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  `}></div>
            </div>
          </div>
          <div className={`${styles.SkillList}`}>
            <img src={FigmaLogo} alt="Figma Logo" />
            <span>Figma</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  `}></div>
              <div className={`${styles.circle}  `}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={CSSLOGO} alt="React Logo" />
            <span>CSS</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={ReactLogo} alt="Figma Logo" />
            <span>React</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  `}></div>
              <div className={`${styles.circle}  `}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={JavaScriptLogo} alt="JavaScript Logo" />
            <span>JavaScript</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>
        </>
      ),
    },

    {
      id: "back-end",
      label: t("experience.skills.backend"),
      content: (
        <>
          <div className={`${styles.SkillList}`}>
            <img src={NextJSLOGO} alt="NEXT.JS Logo" />
            <span>NEXT.JS</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={Apolo} alt="APolo Logo" />
            <span>APolo Server</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  `}></div>
              <div className={`${styles.circle}  `}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={NodeJS} alt="NodeJS Logo" />
            <span>NODEJS</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={ExpressLogo} alt="Express Logo" />
            <span>ExpressJS</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "database",
      label: t("experience.skills.database"),
      content: (
        <>
          <div className={`${styles.SkillList}`}>
            <img src={mongoDBLogo} alt="MongoDB Logo" />
            <span>MongoDB</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={NodeJS} alt="NodeJS Logo" />
            <span>NodeJS</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={MongooseLogo} alt="Mongoose Logo" />
            <span>Mongoose</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={NOSQLLogo} alt="NOSQL Logo" />
            <span>NoSQL</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>
        </>
      ),
    },

    {
      id: "AI",
      label: t("experience.skills.ai&ml"),
      content: (
        <>
          <div className={`${styles.SkillList}`}>
            <img src={PythonLogo} alt="Python Logo" />
            <span>Python</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle} ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={NumpyLogo} alt="Numpy Logo" />
            <span>Numpy</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}`}></div>
              <div className={`${styles.circle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={Matplotlib} alt="Matplotlib Logo" />
            <span>Matplotlib</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  `}></div>
              <div className={`${styles.circle}`}></div>
              <div className={`${styles.circle}`}></div>
            </div>
          </div>
        </>
      ),
    },

    {
      id: "devops",
      label: "DevOps",
      content: (
        <>
          <div className={`${styles.SkillList}`}>
            <img src={GitLOgo} alt="Git Logo" />
            <span>Git</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>

          <div className={`${styles.SkillList}`}>
            <img src={GithubLOGO} alt="GitHub Logo" />
            <span>GitHub</span>
            <div className={styles.level}>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
              <div className={`${styles.circle}  ${styles.activeCircle}`}></div>
            </div>
          </div>
        </>
      ),
    },
  ];

  // Función para manejar el clic en los botones
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div data-aos="fade-down" className={styles.tabContainer}>
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className={styles.tabContent}
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {tabsData.find((tab) => tab.id === activeTab)?.content}
      </div>
    </>
  );
};

export default TabbedSkills;
