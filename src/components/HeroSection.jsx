import PrimaryBtn from './buttons/PrimaryBtn'
import SecondaryBtn from './buttons/SecondaryBtn'
import Logo from './Logo'
import HeroImg from '/hero-img.png'

const HeroSection = () => {
  return (
    <section className='hero'>
        <div className="container grid gap-5 grid-cols-2 h-full">
            <div className='h-[60vh] self-center'>
                <img src={HeroImg} alt="hero image" className='h-full'/>
            </div>
            <div className='self-center'>
                <Logo size="big"/>
                <h1 className='text-[96px] italic font-extrabold text-green-color'>Workspace</h1>
                <p className='text-xl mb-4 w-[450px]'>Innovative workspaces - public, private, and semi-private. Boost your productivity!</p>
                <PrimaryBtn text="Get Started" styles=" bg-[#ff9d00]"/>
                <SecondaryBtn text="I'm already registered" styles="bg-primary-color"/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection