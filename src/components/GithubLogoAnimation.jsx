import ReactCurvedText from "react-curved-text";
import { useLanguage } from "../LanguageContext";

const GithubLogoAnimation = () => {
  const { locale } = useLanguage();

  const isFrench = locale === "fr";

  const text = isFrench ? "Voir sur Github" : "See on Github";
  const githublogo = (
    <>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        className="h-fit w-fit xl:h-[60px] xl:w-[60px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 5C26.717 5 23.4661 5.64664 20.4329 6.90301C17.3998 8.15938 14.6438 10.0009 12.3223 12.3223C7.63392 17.0107 5 23.3696 5 30C5 41.05 12.175 50.425 22.1 53.75C23.35 53.95 23.75 53.175 23.75 52.5V48.275C16.825 49.775 15.35 44.925 15.35 44.925C14.2 42.025 12.575 41.25 12.575 41.25C10.3 39.7 12.75 39.75 12.75 39.75C15.25 39.925 16.575 42.325 16.575 42.325C18.75 46.125 22.425 45 23.85 44.4C24.075 42.775 24.725 41.675 25.425 41.05C19.875 40.425 14.05 38.275 14.05 28.75C14.05 25.975 15 23.75 16.625 21.975C16.375 21.35 15.5 18.75 16.875 15.375C16.875 15.375 18.975 14.7 23.75 17.925C25.725 17.375 27.875 17.1 30 17.1C32.125 17.1 34.275 17.375 36.25 17.925C41.025 14.7 43.125 15.375 43.125 15.375C44.5 18.75 43.625 21.35 43.375 21.975C45 23.75 45.95 25.975 45.95 28.75C45.95 38.3 40.1 40.4 34.525 41.025C35.425 41.8 36.25 43.325 36.25 45.65V52.5C36.25 53.175 36.65 53.975 37.925 53.75C47.85 50.4 55 41.05 55 30C55 26.717 54.3534 23.4661 53.097 20.4329C51.8406 17.3998 49.9991 14.6438 47.6777 12.3223C45.3562 10.0009 42.6002 8.15938 39.5671 6.90301C36.5339 5.64664 33.283 5 30 5Z"
          fill="var(--color-svg-fill)"
        />
      </svg>
    </>
  );

  const textanimation = (
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
      textProps={{ style: { fontSize: 20 } }}
      textPathProps={{
        fill: "#ffffff",
        fontWeight: "500",
        fontFamily: "Syne",
        letterSpacing: "3px",
      }}
      tspanProps={null}
      ellipseProps={null}
      svgProps={{ className: "rotating-curved-text" }}
    />
  );
  return (
    <div className="relative flex h-fit w-fit cursor-pointer justify-center align-middle">
      {githublogo}
      {textanimation}
    </div>
  );
};

export default GithubLogoAnimation;
