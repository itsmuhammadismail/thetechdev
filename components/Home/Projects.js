import Button from "../Button";

const Projects = () => {
  return (
    <div className="px-12 relative z-[30] bg-white">
      <div className="max-w-[70rem] pt-24 pb-[20rem] md:pb-36 mx-auto flex flex-col text-center items-center justify-center">
        <h4
          data-aos="fade-right"
          data-aos-duration="1000"
          className="h4 font-bold"
        >
          Our Products
        </h4>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="max-w-[42rem] my-[1.875rem]"
        >
          We help our clients make better versions of themselves
        </p>
        <div className="w-full relative mt-8">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex flex-col gap-4 md:mr-[4rem]"
          >
            <div className="text-left bg-color p-8 md:p-12 w-full pb-[5rem]">
              <h5 className="h5 font-bold pb-2">Point of Sale</h5>
              <p className="max-w-[29rem] mb-6">
                A point of sale, or point of purchase, is where you ring up
                customers. When customers check out online, walk up to your
                counter, or pick out an item from your stand or booth,
                they&apos;re at the point of sale.
              </p>
              <Button text="View Demo" />
            </div>
          </div>
          <div className="md:max-w-[30rem] absolute md:top-[-1rem] md:right-0">
            <img
              data-aos="fade-down"
              data-aos-duration="1000"
              src="/images/Laptop-Mockup.png"
              alt=""
              className="relative top-0 w-[20rem] right-[2rem]"
            />
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src="/images/Tablet-Mockup.png"
              alt=""
              className="relative top-[-9rem] right-[-10rem] w-[10rem]"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src="/images/Mobile-Mockup.png"
              alt=""
              className="relative top-[-19rem] right-[-3rem] w-[5rem]"
            />
          </div>
          {/* <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src="/images/Tab-Laptop-and-Mob-Mockup.png"
            alt=""
            className="md:max-w-[30rem] absolute bottom-[-11rem] md:top-[-1rem] md:right-0"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
