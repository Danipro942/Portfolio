import styles from "./AnimatedPortrait.module.css";

type PortraitProps = {
  imageSrc: string;
  altText?: string;
  size?: string; // Esta prop controlará el tamaño de todo
};

const AnimatedPortrait = ({
  // imageSrc,
  altText = "Foto de perfil",
  size = "16px", // Valor por defecto (1rem = 16px)
}: PortraitProps) => {
  // El estilo en línea solo necesita establecer el font-size base.
  const componentStyles = {
    fontSize: size,
  };

  return (
    <div className={styles.portraitContainer} style={componentStyles}>
      <img
        src={`https://media.licdn.com/dms/image/v2/D5603AQFx2QNDlYORDw/profile-displayphoto-crop_800_800/B56ZfAr9bgHEAI-/0/1751284439682?e=1756944000&v=beta&t=SgeoVJlAJAGX1q2CNt8WnfspWU3YnTJ5JnNEiQ5HCPo`}
        alt={altText}
        className={styles.portraitImage}
      />
    </div>
  );
};

export default AnimatedPortrait;
