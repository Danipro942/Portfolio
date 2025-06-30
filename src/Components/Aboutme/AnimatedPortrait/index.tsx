import styles from "./AnimatedPortrait.module.css";

type PortraitProps = {
  imageSrc: string;
  altText?: string;
  size?: string; // Esta prop controlará el tamaño de todo
};

const AnimatedPortrait = ({
  imageSrc,
  altText = "Foto de perfil",
  size = "16px", // Valor por defecto (1rem = 16px)
}: PortraitProps) => {
  // El estilo en línea solo necesita establecer el font-size base.
  const componentStyles = {
    fontSize: size,
  };

  return (
    <div className={styles.portraitContainer} style={componentStyles}>
      <img src={imageSrc} alt={altText} className={styles.portraitImage} />
    </div>
  );
};

export default AnimatedPortrait;
