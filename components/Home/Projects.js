const Projects = () => {
  return (
    <div className="px-12">
      <div className="max-w-[70rem] pt-32 pb-60 mx-auto flex flex-col text-center items-center justify-center">
        <h4 className="h4 font-bold">Our Projects</h4>
        <p className="max-w-[42rem] my-[1.875rem]">
          We help our clients make better versions of themselves
        </p>
        <div className="w-full relative flex justify-between mt-8">
          <div className="text-left bg-color p-8 md:p-12 w-full pb-[5rem] md:mr-[4rem]">
            <h5 className="h5 font-bold pb-2">Point of Sale</h5>
            <p className="max-w-[29rem]">
              A point of sale, or point of purchase, is where you ring up
              customers. When customers check out online, walk up to your
              counter, or pick out an item from your stand or booth,
              they&apos;re at the point of sale.
            </p>
          </div>
          <img
            src="/images/mockup.png"
            alt=""
            className="md:max-w-[28rem] absolute bottom-[-11rem] md:top-[-1rem] md:right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
