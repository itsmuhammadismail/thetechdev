import Link from "next/link";
import Button from "../Button";

const Contact = () => {
  return (
    <div className="bg-color px-12 relative z-[30] ">
      <div className="max-w-[70rem] py-20 mx-auto flex flex-col text-center items-center justify-center gap-6">
        <h3 data-aos="fade" data-aos-duration="1000" className="h4 font-bold">
          Ready to get Started
        </h3>
        <Link href="/contact">
          <a>
            <Button
              data-aos="fade"
              data-aos-duration="1000"
              text="Contact Us"
              borderColor={"black"}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
