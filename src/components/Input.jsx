/* eslint-disable react/prop-types */

const Input = ({type, placeholder}) => {
  return (
    <div className="relative border">
        <input type={type} className="w-full" />
        <span className="absolute left-2">{placeholder}<span className="text-red-700">*</span></span>
    </div>
  )
}

export default Input