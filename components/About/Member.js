const Member = ({ name, des, link, img }) => {
  return (
    <div className="flex-1 min-w-[15rem]">
      <div className="relative member">
        <img src={`/images/${img}`} alt="" className="grayscale" />
        <div className="bg-member absolute top-0 left-0 w-full h-full z-[30] flex p-4 items-end member-hover">
          <a href={link} target="_blank" rel="noreferrer">
            <img src="/icons/linkedin2.svg" alt="" className="h-8" />
          </a>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-[1.5rem]">{name}</p>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default Member;
