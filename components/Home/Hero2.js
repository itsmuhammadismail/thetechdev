const Hero = () => {
  return (
    <div className="pt-[5rem] md:pt-[6rem] relative">
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/neuronious.mp4" type="video/mp4" />
      </video>
      <div
        className="hero h-[calc(100vh-10rem)] px-12"
        // style={{ backgroundImage: "url(/images/hero.png)" }}
      >
        <div className="relative z-[10] max-w-[70rem] mx-auto h-full flex flex-col justify-center gap-4 ">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            className=" text-white max-w-[38rem] font-bold text-[3rem] md:text-[4rem]"
          >
            Bringing Brands to Life Digitally.
          </h2>
          {/* <p className="max-w-[38rem] text-white">
            We develop software with methodology, dedication and experience to
            help you achieve all your goals.
          </p> */}

          <button
            className="hero-button"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <p className="">Our Services</p>
            <div className="h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 64 64"
                viewBox="0 0 64 64"
              >
                <polyline
                  fill="#134563"
                  points="-210.9 -289 -212.9 -291 -201.1 -302.7 -212.9 -314.4 -210.9 -316.4 -197.1 -302.7 -210.9 -289"
                  transform="translate(237 335)"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
