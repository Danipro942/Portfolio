import styles from "./style.module.css";
import EN from "../../assets/flags/english.png";
import ES from "../../assets/flags/spanish.svg";

type Props = {
  setIsNightMode: (isNightMode: boolean) => void;
  isNightMode: boolean;
};

const DarkMode = ({ setIsNightMode, isNightMode }: Props) => {
  const toggleClassName = `${styles.toggleLabel} ${
    isNightMode ? styles.night : ""
  }`;

  return (
    <div className={styles.nightModeContainer} style={{ fontSize: "0.8em" }}>
      <div
        className={toggleClassName}
        onClick={() => setIsNightMode(!isNightMode)}
      >
        <span className={styles.icon}>
          <i className="fas fa-sun">
            <img src={EN} alt="" />
          </i>
        </span>
        <span className={styles.icon}>
          <i className="fas fa-moon">
            <img src={ES} alt="" />
          </i>
        </span>
        <span className={styles.slider}></span>
      </div>
    </div>
  );
};

export default DarkMode;
