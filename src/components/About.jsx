import man from "/man.png";

const About = () => {
  return (
    <section className="relative mt-0" id="about">
      <div className="flex lg:flex-row flex-col items-center justify-center">
        <img
          src={man}
          alt="Man"
          className="w-full lg:w-1/2 z-[3] mt-52"
          draggable={false}
        />
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <p className="text-text text-[16px] md:text-[18px] lg:text-[20px] lg:text-left text-center">
            Lorem ipsum dolor sit amet consectetur. Non diam venenatis enim enim
            nibh adipiscing malesuada ac interdum. Amet pellentesque integer
            pharetra amet gravida maecenas eget lacus nulla. Congue pharetra
            pretium porttitor bibendum duis velit enim nibh adipiscing malesuada
            ac interdum. Amet pellentesque integer pharetra amet gravida
            maecenas eget lacus nulla. Congue pharetra pretium porttitor
            bibendum duis velit
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
