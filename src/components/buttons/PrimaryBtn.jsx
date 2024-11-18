/* eslint-disable react/prop-types */

const PrimaryBtn = ({styles, text}) => {
  return (
    <button className={`${styles} text-xl font-bold w-[409px] h-[57px] rounded-[20px] p-[10px] gap-[10px]`}>
        {text}
    </button>
  )
}

export default PrimaryBtn