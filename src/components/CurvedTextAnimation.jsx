/* eslint-disable react/prop-types */
import ReactCurvedText from "react-curved-text"; // Assurez-vous d'avoir installé cette bibliothèque
import { useLanguage } from "../LanguageContext";

const CurvedTextAnimation = ({
  fontSize = 20,
  fill = "#ffffff",
  fontWeight = "500",
  fontFamily = "Syne",
  letterSpacing = "3px",
}) => {
  const { locale } = useLanguage();

  const isFrench = locale === "fr";

  const text = isFrench ? "Voir sur Github" : "See on Github";
  return (
    <ReactCurvedText
      width={100}
      height={100}
      cx={50}
      cy={50}
      rx={42.5}
      ry={42.5}
      startOffset={0}
      reversed={false}
      text={text}
      textProps={{ style: { fontSize } }}
      textPathProps={{
        fill,
        fontWeight,
        fontFamily,
        letterSpacing,
      }}
      tspanProps={null}
      ellipseProps={null}
      svgProps={{ className: "rotating-curved-text" }}
    />
  );
};

export default CurvedTextAnimation;
