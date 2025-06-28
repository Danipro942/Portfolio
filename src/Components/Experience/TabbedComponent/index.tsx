import { useState } from "react";
import "./style.css"; // Asegúrate de que el CSS esté importado
import Projects from "./Projects";
import Skills from "./Skills";
import { useTranslation } from "react-i18next";

const TabbedComponent = () => {
  const [t] = useTranslation("global");

  // Estado para controlar qué pestaña está activa
  const [activeTab, setActiveTab] = useState("projects");

  // Definimos los datos de las pestañas en un array para facilitar la iteración
  const tabsData = [
    {
      id: "projects",
      label: t("experience.tabsData.projects"),
      content: <Projects />,
    },

    {
      id: "skills",
      label: t("experience.tabsData.skills"),
      content: <Skills />,
    },
  ];

  // Función para manejar el clic en los botones
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="tab-container" data-aos="fade-up">
        {/* El slider ahora usa una clase dinámica para su posición */}
        <div className={`slider tab-${activeTab}`}></div>

        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="tab-content">
        {tabsData.find((tab) => tab.id === activeTab)?.content}
      </div>
    </>
  );
};

export default TabbedComponent;
