import logo from '../../../image/tool_logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Menubar = () => {
    const [user] = useAuthState(auth)

    const menuItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/tools">Tools</NavLink></li>
        {
            user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        }
        <li><NavLink to="/reviews">Reviews</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/my-portfolio">My Portfolio</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </>


    return (
        <div className="navbar bg-white shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        {menuItems}
                        <li>{user ? <button className="btn btn-accent text-white" onClick={() => signOut(auth)} >LogOut</button> : <NavLink to="/login">Login</NavLink>}</li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl flex items-center">
                    <img
                        src={logo}
                        width={60}
                        height={60}
                        alt="toolmine logo"
                    />
                    <h1 className='text-xl px-1 lg:text-2xl'>TOOL<span className='text-primary'>MINE</span></h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    <li>{user ? <button className="btn btn-accent text-white" onClick={() => signOut(auth)} >LogOut</button> : <NavLink to="/login">Login</NavLink>}</li>
                </ul>
            </div>
        </div>
    )
}

export default Menubar;