/* eslint-disable react/prop-types */

const SecondaryBtn = ({ styles, text }) => {
  return (
    <div className="relative inline-block w-[409px]">
      <button
        className={`${styles} z-10 relative text-xl font-bold h-[57px] rounded-[20px] p-[10px] gap-[10px] bg-white`}
        style={{
          borderImage: "linear-gradient(to right, lime, purple) 1",
          borderWidth: "2px",
          borderStyle: "solid",
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default SecondaryBtn;

