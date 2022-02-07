const Top = ({ heading, desc, img }) => {
  return (
    <div className="relative pt-[5rem] md:pt-[6rem] h-full">
      <img src={img} alt="" className="absolute right-0 h-full object-cover" />
      <div className="relative z-[30] gradient-bg h-[calc(100vh-10rem)] px-12">
        <div className="max-w-[70rem] mx-auto h-full flex flex-col justify-center gap-4">
          <h2 className="text-[3rem] md:text-[4rem] font-bold text-white leading-tight">
            {heading}
          </h2>
          <p className="max-w-[40rem] text-white">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
