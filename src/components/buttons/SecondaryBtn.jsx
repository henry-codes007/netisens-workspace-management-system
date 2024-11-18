/* eslint-disable react/prop-types */

const SecondaryBtn = ({styles, text}) => {
    return (
      <div className="relative inline-block w-[409px]">
          <button className={`${styles} z-10 relative border-[1px] border-transparent text-xl font-bold  h-[57px] rounded-[20px] p-[10px] gap-[10px]`}>
              {text}
          </button>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-lime-500 to-purple-500 -z-10"></div>
      </div>
    )
  }

export default SecondaryBtn