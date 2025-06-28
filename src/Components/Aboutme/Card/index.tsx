import style from "../style.module.css";
import { cardInfo } from "../../../types/CarInfo";

type Props = {
  title?: string;
  cardInfo: cardInfo[];
  bgColor?: string;
  icon?: React.ReactNode;
  delayanimation?: number;
};

const Card = ({ title, cardInfo, bgColor, icon, delayanimation }: Props) => {
  console.log(cardInfo);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delayanimation || 200}
      className={style.card}
      style={{
        background: bgColor,
      }}
    >
      <div className={style.cardTitle}>
        <div className={style.iconCard}>
          <i>{icon}</i>
        </div>
        <span>{title}</span>
      </div>
      {cardInfo.map((info, index) => (
        <div
          className={style.informationCard}
          key={index}
          style={{
            background: info.bgColor,
          }}
        >
          <div>
            <span>{info.title}</span>
            <span>{info.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
