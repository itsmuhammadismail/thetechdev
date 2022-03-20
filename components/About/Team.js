import Member from "./Member";

const Team = () => {
  return (
    <div className="bg-white relative z-[30] px-12">
      <div className="max-w-[70rem] mx-auto flex flex-col justify-center items-center py-24">
        <h3 className="h4 font-bold mb-12 ">Our Team</h3>
        <div className="flex flex-wrap gap-8 mb-8">
          <Member
            img="Zain.jpg"
            name="Zainuddin Mughal"
            des="Co-Founder & CMO"
            link="https://www.linkedin.com/in/zainuddin-mughal-115003217/"
          />
          <Member
            img="Haseeb.jpg"
            name="Muhammad Haseeb"
            des="Co-Founder & COO"
            link="https://www.linkedin.com/in/muhammadhaseebullah"
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
        </div>
        <div className="flex flex-wrap gap-8">
          <Member
            img="Kawish.jpg"
            name="Kawish Habibzade"
            des="Co-Founder & Creative Head"
            link="https://www.linkedin.com/in/mir-kawash-habibzade-790964158/"
          />
          <Member
            img="Shehzad.jpg"
            name="Shehzad Baloch"
            des="Head of Products Development"
            link="https://www.linkedin.com/in/shehzad-munir-codtechit"
          />
          <Member
            img="Urooj.jpg"
            name="Urooj Majid"
            des="React.js Developer"
            link="https://pk.linkedin.com/in/urooj-majid-a129aa208"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
