const Skills = () => {
  return (
    <main
      className="section work part mx-8 mt-32 flex flex-col gap-24 xl:mx-32 xl:mt-32"
      id="skills"
    >
      <h2 className="font-manrope mt-20 text-center text-[60px] font-semibold text-text sm:text-[70px] lg:text-[102px] xl:mt-48">
        Skill &{" "}
        <span className="gradient-text bg-gradient-title bg-clip-text">me</span>
      </h2>

      <section className="flex flex-col gap-12">
        <div className="front_container">
          <h3 className="text-5xl text-[#073EFF]">
            Front<span className="text-text">end</span>
          </h3>

          <div className="flex gap-10">
            {[
              ["Vite", "/vite.svg"],
              ["Angular", "/angular.svg"],
              ["TailwindCSS", "/tailwindcss.svg"],
            ].map(([techname, techimg]) => (
              <div
                key={techimg}
                className="front_card gradient-card-skills-dark mt-12 flex h-44 w-44 flex-col items-center justify-evenly gap-4 rounded-[30px]"
              >
                <img src={techimg} className="h-20 w-20" />
                <p className="font-manrope text-2xl font-bold text-text">
                  {techname}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="back_container">
          <h3 className="text-5xl text-[#073EFF]">
            Back<span className="text-text">end</span>
          </h3>

          <div className="flex gap-10">
            {[
              ["Symfony", "/symfony.svg"],
              ["Php", "/php.svg"],
              ["NodeJS", "/nodejs.svg"],
            ].map(([techname, techimg]) => (
              <div
                key={techimg}
                className="front_card gradient-card-skills-dark mt-12 flex h-44 w-44 flex-col items-center justify-evenly gap-4 rounded-[30px]"
              >
                <img src={techimg} className="h-20 w-20" />
                <p className="font-manrope text-2xl font-bold text-text">
                  {techname}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="tools_container">
          <h3 className="text-5xl text-text">
            Ma boîte à <span className="text-[#073EFF]">outils</span>
          </h3>

          <div className="flex gap-10">
            {[
              ["Visual Code Studio", "/visualcode.svg"],
              ["Figma", "/figma.svg"],
              ["Git", "/git.svg"],
              ["Github", "/github.svg"],
              ["Wordpress", "/wordpress.svg"],
              ["After Effect", "/aftereffect.svg"],
              ["Première Pro", "/premierepro.svg"],
            ].map(([techname, techimg]) => (
              <div
                key={techimg}
                className="front_card gradient-card-skills-dark mt-12 flex h-44 w-44 flex-col items-center justify-evenly gap-4 rounded-[30px]"
              >
                <img src={techimg} className="h-16 w-16" />
                <p className="font-manrope text-center text-xl font-bold text-text">
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
