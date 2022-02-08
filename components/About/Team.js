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
            link="https://www.linkedin.com/in/zainuddin-mughal-115003217/"
          />
          <Member
            img="Ismail.jpg"
            name="Muhammad Ismail"
            des="Co-Founder & CTO"
            link="https://www.linkedin.com/in/itsmuhammadismail/"
          />
          <Member
            img="Areeba.jpg"
            name="Areeba Tanveer"
            des="Co-Founder & CFO"
            link="https://www.linkedin.com/in/areeba-tanveer-ab430b220"
          />
          <Member
            img="Haseeb.jpeg"
            name="Muhammad Haseeb"
            des="Co-Founder & COO"
            link="https://www.linkedin.com/in/muhammadhaseebullah"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
