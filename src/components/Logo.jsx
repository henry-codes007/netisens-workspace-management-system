/* eslint-disable react/prop-types */
import NetisensLogo from '/net-logo.png'

const Logo = ({size}) => {
  return (
    <div className={`${size === 'big' ? 'w-[400px]' : 'w-[200px]'}`}>
        <img src={NetisensLogo} alt="logo" className='w-full h-full object-cover'/>
    </div>
  )
}

export default Logo