import { FormattedMessage } from "react-intl";
import "../index.css";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

const Works = () => {
  return (
    <main
      className="section work part mx-4 mt-32 flex flex-col items-center gap-24 md:mx-8 xl:mx-0 xl:ml-auto xl:mr-auto xl:mt-32"
      id="works"
    >
      <h3 className="gradient-text font-font-manrope mt-20 bg-gradient-footer-tittle_white bg-clip-text text-center text-[60px] font-semibold dark:bg-gradient-title sm:text-[70px] lg:text-[102px] xl:mt-48 ">
        <FormattedMessage id="works.title" />
      </h3>
      <Card1 />

      <Card2 />

      <Card3 />

      <Card4 />
    </main>
  );
};

export default Works;
