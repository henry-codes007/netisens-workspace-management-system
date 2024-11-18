import { Link } from "react-router-dom"
import Logo from "./Logo"


const Header = () => {
  return (
    <header className="h-[70px]">
        <div className="container flex items-center justify-between h-full">
            <Logo/>
            <ul className="flex items-center gap-3 justify-center">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/signin'}>Sign In</Link>
                </li>
                <li>
                    <Link to={'/signup'}>Sign Up</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header