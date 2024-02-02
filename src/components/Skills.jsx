import { FormattedMessage } from "react-intl";
import { useLanguage } from "../LanguageContext";

const Skills = () => {
  const locale = useLanguage();

  const isFrench = locale === "fr";

  const mybox = isFrench ? "Ma boite à" : "My box of";
  const tools = isFrench ? "outils" : "tools";
  return (
    <main
      className="section work part mt-32 flex flex-col gap-12 lg:mx-32 xl:mt-32"
      id="skills"
    >
      <h2 className="xl:mt-88 mt-28 text-center font-manrope text-[42.5px] font-semibold text-text sm:text-[80px] lg:text-[102px]">
        <FormattedMessage id="skills.title" />
        <span className="gradient-text bg-gradient-title bg-clip-text">
          <FormattedMessage id="skills.title2" />
        </span>
      </h2>

      <section className="flex flex-col gap-24 lg:gap-16">
        <div className="front_container">
          <h3 className="text-center text-5xl text-[#073EFF] lg:text-left">
            Front<span className="text-text">end</span>
          </h3>

          <div className="ml-auto mr-auto mt-8 flex flex-col items-center gap-6 md:w-fit md:flex-row lg:ml-0">
            <div className="mb flex gap-6">
              <div className="dark:skill_card skill_card_white">
                <img src="/vite.svg" className="image_card" draggable={false} />
                <p className="text_skill_card text-background dark:text-text ">
                  Vite
                </p>
              </div>
              <div className="dark:skill_card skill_card_white">
                <img
                  src="/angular.svg"
                  className="image_card"
                  draggable={false}
                />
                <p className="text_skill_card text-background dark:text-text ">
                  Angular
                </p>
              </div>
            </div>

            <div className="dark:skill_card skill_card_white">
              <img
                src="/tailwindcss.svg"
                className="image_card"
                draggable={false}
              />
              <p className="text_skill_card text-background dark:text-text ">
                Tailwind
              </p>
            </div>
          </div>
        </div>

        <div className="back_container">
          <h3 className="text-center text-5xl text-[#073EFF] lg:text-left">
            Back<span className="text-text">end</span>
          </h3>

          <div className="ml-auto mr-auto mt-8 flex flex-col items-center gap-6 md:w-fit md:flex-row lg:ml-0">
            <div className="mb flex gap-6">
              <div className="dark:skill_card skill_card_white">
                <img
                  src="/symfony.svg"
                  className="image_card"
                  draggable={false}
                />
                <p className="text_skill_card text-background dark:text-text ">
                  Symfony
                </p>
              </div>
              <div className="dark:skill_card skill_card_white">
                <img src="/php.svg" className="image_card" draggable={false} />
                <p className="text_skill_card text-background dark:text-text ">
                  PhP
                </p>
              </div>
            </div>

            <div className="dark:skill_card skill_card_white">
              <img src="/nodejs.svg" className="image_card" draggable={false} />
              <p className="text_skill_card text-background dark:text-text ">
                NodeJS
              </p>
            </div>
          </div>
        </div>

        <div className="tools_container">
          <h3 className="text-center text-5xl text-text lg:text-left">
            {mybox} <span className="text-[#073EFF]">{tools}</span>
          </h3>

          <div className="tools_container_card ml-auto mr-auto mt-8 grid w-fit grid-cols-2 gap-8 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-10 lg:ml-0 lg:mt-0 lg:gap-8 lg:gap-y-0 xl:grid-cols-5 2xl:grid-cols-6">
            {[
              ["Visual Code", "/visualcode.svg"],
              ["Figma", "/figma.svg"],
              ["Git", "/git.svg"],
              ["Github", "/github.svg"],
              ["Wordpress", "/wordpress.svg"],
              ["Illustrator", "/illustrator.svg"],
              ["Photoshop", "/photoshop.svg"],
              ["After Effect", "/aftereffect.svg"],
              ["Première Pro", "/premierepro.svg"],
              ["ChatGPT", "/chatgpt.svg"],
            ].map(([techname, techimg]) => (
              <div
                key={techimg}
                className="front_card gradient-card-skills-light dark:gradient-card-skills-dark ml-auto mr-auto flex h-28 w-28 flex-col items-center justify-evenly gap-4 rounded-md md:h-32 md:w-32 lg:mt-12 lg:h-44 lg:w-44 lg:rounded-[30px]"
              >
                <img
                  src={techimg}
                  className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
                />
                <p className="text_skill_card text-center text-background dark:text-text ">
                  {techname}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
