import { useTranslation } from "react-i18next";

import "./style.css";

type Props = {};

const CopyRight = ({}: Props) => {
  const [t] = useTranslation("global");

  return (
    <footer>
      <p>&copy; 2025 Daniel Felipe Hinestroza. {t("footer")}</p>
    </footer>
  );
};

export default CopyRight;
