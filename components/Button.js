const Button = ({ text, icon, borderColor }) => {
  return (
    <button
      className={`border border-black gap-4 w-[13rem] flex justify-center items-center p-4 btn`}
    >
      <p className={`text-[${borderColor}]`}>{text}</p>
      {icon && <img src={icon} alt="" />}
    </button>
  );
};

export default Button;
