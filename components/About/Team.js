import Member from "./Member";

const Team = () => {
  return (
    <div className="bg-white relative z-[30] px-12">
      <div className="max-w-[70rem] mx-auto flex flex-col justify-center items-center py-24">
        <h3 className="h4 font-bold mb-12">Our Team</h3>
        <div className="flex flex-wrap gap-8">
          <Member
            img="Zain.jpg"
            name="Zainuddin Mughal"
            des="Co-Founder & CMO"
          />
          <Member
            img="Ismail.jpg"
            name="Muhammad Ismail"
            des="Co-Founder & CTO"
          />
          <Member
            img="Areeba.jpg"
            name="Areeba Tanveer"
            des="Co-Founder & CFO"
          />
          <Member
            img="Haseeb.jpeg"
            name="Muhammad Haseeb"
            des="Co-Founder & COO"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
