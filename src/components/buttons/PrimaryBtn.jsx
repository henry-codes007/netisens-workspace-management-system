/* eslint-disable react/prop-types */

const PrimaryBtn = ({styles, text}) => {
  return (
    <button className={`${styles} text-lg font-bold w-full md:w-[300px] xl:w-[350px] px-4 whitespace-nowrap h-[57px] rounded-[20px] p-[10px] gap-[10px]`}>
        {text}
    </button>
  )
}

export default PrimaryBtn