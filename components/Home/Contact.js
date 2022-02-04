import Button from "../Button";

const Contact = () => {
  return (
    <div className="bg-color px-12">
      <div className="max-w-[70rem] py-20 mx-auto flex flex-col text-center items-center justify-center gap-6">
        <h3 className="h4 font-bold">Ready to get Started</h3>
        <Button text="Contact Us" borderColor={"black"} />
      </div>
    </div>
  );
};

export default Contact;
