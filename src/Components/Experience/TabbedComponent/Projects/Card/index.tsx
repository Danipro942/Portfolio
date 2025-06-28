import style from "./style.module.css";
import WeatherAppImg from "../../../../../assets/projects/weatherapp.svg";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type technologyCard = {
  bgColor: string;
  title: string;
  borderColor?: string;
  colorText?: string;
};
type link = {
  frontEnd?: Boolean;
  backEnd?: Boolean;
  liveDemo?: Boolean;
};

type Props = {
  image?: string;

  size?: string;
  title: string;
  description: string;
  technologies: technologyCard[];
  links: link;
  delayanimation?: number;
  urlDemo?: string;
  urlfront?: string;
  urlback?: string;
  // delayanimation?: number;
};

const Card = ({
  title,
  description,
  links,
  technologies,
  image,
  size,
  delayanimation,
  urlDemo,
  urlfront,
  urlback,
}: Props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delayanimation || 200}
      className={style.card}
    >
      <div className={style.cardContent}>
        <div className={style.imageProjects}>
          <img
            src={image ? image : WeatherAppImg}
            alt="Image Project"
            style={{ scale: size || "1" }}
          />
        </div>

        <div className={style.description}>
          <span>{title}</span>
          <p>{description}</p>
        </div>

        <div className={style.technologies}>
          {technologies.map((tech, index) => (
            <div
              className={style.listTech}
              key={index}
              style={{
                border: `1px solid ${tech.borderColor}`,
                backgroundColor: tech.bgColor,
                color: tech.colorText || "#000",
              }}
            >
              {tech.title}
            </div>
          ))}
        </div>
        <div className={style.containerInteract}>
          <div className={style.interact}>
            {links.frontEnd && (
              <a
                className={style.buttons}
                href={urlfront || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaGithub />
                </i>
                Front-End
              </a>
            )}

            {links.backEnd && (
              <a
                className={style.buttons}
                href={urlback || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaGithub />
                </i>
                Back-End
              </a>
            )}

            {links.liveDemo && (
              <a
                className={style.buttons}
                href={urlDemo || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FiExternalLink />
                </i>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
