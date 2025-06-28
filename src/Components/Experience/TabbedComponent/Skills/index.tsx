import style from "./style.module.css";
import TabbedSkills from "./TabbedSkills";

type Props = {};

const Skills = ({}: Props) => {
  return (
    <div className={style.skills}>
      <TabbedSkills />
    </div>
  );
};

export default Skills;
