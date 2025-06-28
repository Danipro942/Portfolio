import Card from "./Card";
import style from "./style.module.css";
import GroupChatImage from "../../../../assets/projects/GroupChat.svg";
import Whatsapp from "../../../../assets/projects/whatsapp.svg";
import TodoTask from "../../../../assets/projects/Todo-Task.png";
import Porfolio from "../../../../assets/projects/Portfolio.svg";
import { useTranslation } from "react-i18next";

type Props = {};

const Projects = ({}: Props) => {
  const [t] = useTranslation("global");

  return (
    <div className={style.projectsList}>
      <Card
        title="Weather App"
        description={t("experience.projects.description1")}
        urlDemo={"https://weatherapp-production-4777.up.railway.app/"}
        urlfront={"https://github.com/Danipro942/WeatherApp"}
        links={{ frontEnd: true, backEnd: false, liveDemo: true }}
        technologies={[
          {
            bgColor: "#61dafb24",
            title: "React",
            borderColor: "rgb(0 246 255 / 60%)",
            colorText: "rgb(19 239 251)",
          },
          {
            bgColor: "#feff001f",
            title: "JavaScript",
            borderColor: "#feff00ba",
            colorText: "#f9ff00",
          },
          {
            bgColor: "#0069ff30",
            title: "TypeScript",
            borderColor: "#264de4",
            colorText: "#00b6ff",
          },
        ]}
      />

      <Card
        delayanimation={500}
        title="GroupChat App"
        description={t("experience.projects.description2")}
        urlfront={"https://github.com/Danipro942/GroupChat-Web"}
        urlDemo={"https://chatgroupdanisth.up.railway.app/auth/login"}
        urlback={"https://github.com/Danipro942/DanisthChat"}
        image={GroupChatImage}
        links={{ frontEnd: true, backEnd: true, liveDemo: true }}
        technologies={[
          {
            bgColor: "rgb(97 218 251 / 41%)",
            title: "React",
            borderColor: "rgb(0 246 255 / 60%)",
            colorText: "rgb(19 239 251)",
          },
          {
            bgColor: "#00ff4c33",
            title: "Node.js",
            borderColor: "#15ff00a8",
            colorText: "#00ff39",
          },
          {
            bgColor: "#0069ff30",
            title: "TypeScript",
            borderColor: "#264de4",
            colorText: "#00b6ff",
          },
          {
            bgColor: "#feff001f",
            title: "JavaScript",
            borderColor: "#feff00ba",
            colorText: "#f9ff00",
          },
          {
            bgColor: "#f0f0f033",
            title: "ExpressJS",
            borderColor: "#000c",
            colorText: "#fff",
          },

          {
            bgColor: "#d500ff33",
            title: "JWT",
            borderColor: "#ff00facc",
            colorText: "#ff45ef",
          },

          {
            bgColor: "#f003",
            title: "Mongoose",
            borderColor: "#f00c",
            colorText: "#ff0000cc",
          },

          {
            bgColor: "#009f2f33",
            title: "MongoDB",
            borderColor: "#0a7500",
            colorText: "#00ff39",
          },
        ]}
      />

      <Card
        delayanimation={1000}
        title="Todo-Task App"
        urlDemo="https://reliable-bravery-production.up.railway.app/"
        urlfront="https://github.com/Danipro942/TodoTask-FullStack/tree/main/client"
        urlback="https://github.com/Danipro942/TodoTask-FullStack/tree/main/server"
        description={t("experience.projects.description3")}
        image={TodoTask}
        links={{ frontEnd: true, backEnd: true, liveDemo: true }}
        technologies={[
          {
            bgColor: "#61dafb24",
            title: "React",
            borderColor: "rgb(0 246 255 / 60%)",
            colorText: "rgb(19 239 251)",
          },
          {
            bgColor: "#feff001f",
            title: "JavaScript",
            borderColor: "#feff00ba",
            colorText: "#f9ff00",
          },
          {
            bgColor: "#0069ff30",
            title: "TypeScript",
            borderColor: "#264de4",
            colorText: "#00b6ff",
          },
        ]}
      />

      <Card
        title="WhatsApp Clone"
        description={t("experience.projects.description4")}
        size="0.9"
        urlfront="https://github.com/Danipro942/WhatsAppClone/tree/main/client"
        urlback="https://github.com/Danipro942/WhatsAppClone/tree/main/server"
        image={Whatsapp}
        links={{ frontEnd: true, backEnd: true, liveDemo: false }}
        technologies={[
          {
            bgColor: "rgb(97 218 251 / 41%)",
            title: "React",
            borderColor: "rgb(0 246 255 / 60%)",
            colorText: "rgb(19 239 251)",
          },
          {
            bgColor: "#00ff4c33",
            title: "Node.js",
            borderColor: "#15ff00a8",
            colorText: "#00ff39",
          },
          {
            bgColor: "#0069ff30",
            title: "TypeScript",
            borderColor: "#264de4",
            colorText: "#00b6ff",
          },
          {
            bgColor: "#f0f0f033",
            title: "ExpressJS",
            borderColor: "#000c",
            colorText: "#fff",
          },

          {
            bgColor: "#d500ff33",
            title: "JWT",
            borderColor: "#ff00facc",
            colorText: "#ff45ef",
          },

          {
            bgColor: "#f003",
            title: "Mongoose",
            borderColor: "#f00c",
            colorText: "#ff0000cc",
          },

          {
            bgColor: "#009f2f33",
            title: "MongoDB",
            borderColor: "#0a7500",
            colorText: "#00ff39",
          },
          {
            bgColor: "#00499f33",
            title: "Apollo",
            borderColor: "#002575",
            colorText: "#51b5ff",
          },
          {
            bgColor: "#d500ff33",
            title: "GraphQL",
            borderColor: "#ff00facc",
            colorText: "#ff45ef",
          },
        ]}
      />

      <Card
        title="My Portfolio"
        description={t("experience.projects.description5")}
        delayanimation={500}
        image={Porfolio}
        links={{ frontEnd: true, backEnd: false, liveDemo: false }}
        technologies={[
          {
            bgColor: "#61dafb24",
            title: "React",
            borderColor: "rgb(0 246 255 / 60%)",
            colorText: "rgb(19 239 251)",
          },
          {
            bgColor: "#feff001f",
            title: "JavaScript",
            borderColor: "#feff00ba",
            colorText: "#f9ff00",
          },
          {
            bgColor: "#0069ff30",
            title: "TypeScript",
            borderColor: "#264de4",
            colorText: "#00b6ff",
          },
        ]}
      />
    </div>
  );
};

export default Projects;
