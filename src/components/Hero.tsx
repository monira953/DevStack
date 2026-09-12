import hero from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-base-100">
      <div className="container mx-auto px-6 py-12 lg:py-20">

        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* LEFT — TEXT */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Ideal
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: "var(--brand-gradient)",
                }}
              >
                Developer Stack
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0">
              Discover the best technologies for modern web development.
              Explore tools, compare technologies, and build your perfect
              developer stack.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">

              <a
                href="#technologies"
                className="btn border-0 text-white rounded-full px-7"
                style={{
                  backgroundImage: "var(--brand-gradient)",
                }}
              >
                Explore Technologies
              </a>

              <a
                href="#stack"
                className="btn btn-outline rounded-full px-7"
              >
                Build Your Stack
              </a>

            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={hero}
              alt="Developer technologies"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;