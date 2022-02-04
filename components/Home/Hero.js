import Button from "../Button";

const Hero = () => {
  return (
    <div className="px-12 h-[calc(100vh-6rem)]">
      <div className="max-w-[70rem] h-full mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 ">
        <div className="flex flex-col items-center md:items-start gap-8 md:gap-16 ">
          <h1 className="font-bold h4 md:h3 leading-[1.15] text-center md:text-left">
            Bringing
            <br />
            <span className="color-2 h1 md:h0">Brands</span>
            <br />
            <span className="h3">to Life Digitally</span>
          </h1>
          <Button
            text="Our Services"
            icon="/icons/arrow.svg"
            borderColor={"#113cfc"}
          />
        </div>
        <div className="">
          <img src="/images/hero.svg" alt="" className="md:max-w-[35rem]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
