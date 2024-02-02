const Skills = () => {
  return (
    <main
      className="section work part mx-8 mt-32 flex flex-col gap-24 xl:mx-32 xl:mt-32"
      id="skills"
    >
      <h2 className="font-manrope mt-20 text-center text-[60px] font-semibold text-text sm:text-[70px] lg:text-[102px] xl:mt-88">
        Skill &{" "}
        <span className="gradient-text bg-gradient-title bg-clip-text">me</span>
      </h2>

      <section className="flex flex-col gap-10">
        <div className="front_container">
          <h3 className="text-5xl text-[#073EFF] lg:text-left text-center">
            Front<span className="text-text">end</span>
          </h3>

          <div className="w-fit flex flex-col gap-6 mr-auto ml-auto lg:ml-0 mt-8">
            <div className="flex gap-6 mb">
              <div
                className="back_card gradient-card-skills-dark mr-auto ml-auto mt-0 flex md:h-32 md:w-32 lg:h-44 lg:w-44 h-24 w-24 flex-col items-center justify-evenly gap-4 lg:rounded-[30px] rounded-md"
              >
                <img src="/vite.svg" className="h-10 w-10 lg:h-20 lg:w-20" />
                <p className="font-manrope lg:text-2xl text-base font-bold text-text">
                Vite
                </p>
              </div>
              <div
                className="back_card gradient-card-skills-dark mr-auto ml-auto mt-0 flex md:h-32 md:w-32 lg:h-44 lg:w-44 h-24 w-24 flex-col items-center justify-evenly gap-4 lg:rounded-[30px] rounded-md"
              >
                <img src="/angular.svg" className="h-10 w-10 lg:h-20 lg:w-20" />
                <p className="font-manrope lg:text-2xl text-base font-bold text-text">
                Angular
                </p>
              </div>
              </div>

              <div
                className="back_card gradient-card-skills-dark mr-auto ml-auto mt-0 flex md:h-32 md:w-32 lg:h-44 lg:w-44 h-24 w-24 flex-col items-center justify-evenly gap-4 lg:rounded-[30px] rounded-md"
              >
                <img src="/tailwindcss.svg" className="h-10 w-10 lg:h-20 lg:w-20" />
                <p className="font-manrope lg:text-2xl text-base font-bold text-text">
                Tailwind
                </p>
              </div>
          </div>
        </div>

        <div className="back_container">
          <h3 className="text-5xl text-[#073EFF] lg:text-left text-center">
            Back<span className="text-text">end</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-3 md:gap-10 w-fit mr-auto ml-auto lg:ml-0 mt-8">
            {[
              ["Symfony", "/symfony.svg"],
              ["Php", "/php.svg"],
              ["NodeJS", "/nodejs.svg"],
            ].map(([techname, techimg]) => (
              <div
                key={techimg}
                className="back_card gradient-card-skills-dark mr-auto ml-auto mt-0 flex md:h-32 md:w-32 lg:h-44 lg:w-44 h-24 w-24 flex-col items-center justify-evenly gap-4 lg:rounded-[30px] rounded-md"
              >
                <img src={techimg} className="h-10 w-10 lg:h-20 lg:w-20" />
                <p className="font-manrope lg:text-2xl text-base font-bold text-text">
                  {techname}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="tools_container">
          <h3 className="text-5xl text-[#073EFF] lg:text-left text-center">
            Ma boîte à <span className="text-[#073EFF]">outils</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 w-fit gap-8 mr-auto ml-auto lg:ml-0 lg:gap-8 lg:gap-y-0">
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
            ].map(([techname, techimg]) => (
              <div
                key={techimg}
                className="front_card gradient-card-skills-dark mr-auto ml-auto mt-8 lg:mt-12 flex md:h-32 md:w-32 lg:h-44 lg:w-44 h-24 w-24 flex-col items-center justify-evenly gap-4 lg:rounded-[30px] rounded-md"
              >
                <img src={techimg} className="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16" />
                <p className="font-manrope lg:text-2xl text-base font-bold text-text text-center">
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
