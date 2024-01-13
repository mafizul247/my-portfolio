import React from 'react';
import img1 from './../../assets/images/img1.jpg'
import { Link } from 'react-scroll';

const NavBer = () => {
    const navItems = <>
        {/* <li><a href='#home'>Home</a></li> */}
        <li><Link to='home' activeClass='active' smooth={true} spy={true} duration={2500} >Home</Link></li>
        <li><Link to='about' activeClass='active' smooth={true} spy={true} duration={2500} >About</Link></li>
        <li><Link to='skill' activeClass='active' smooth={true} spy={true} duration={2500} >Skill</Link></li>
        <li><Link to='project' activeClass='active' smooth={true} spy={true} duration={2500} >Project</Link></li>
        <li><Link to='contact' activeClass='active' smooth={true} spy={true} duration={2500} >Contact</Link></li>
    </>
    return (
        <div>
            {/* className="navbar bg-gray-700 fixed max-w-7xl z-20 text-white opacity-75"  */}
            <div className="navbar bg-base-200 fixed z-20 lg:px-6 max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <button className='btn btn-outline text-xl font-bold'><Link to='home' smooth={true} spy={true} duration={2500} >Portfolio</Link></button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='btn btn-outline'><Link to='hired' activeClass='active' smooth={true} spy={true} duration={2500} >Get Hired</Link></button>
                    {/* <img className='w-12 h-12 rounded-full border-2 border-white ml-3' src={img1} alt="profile" /> */}
                </div>
            </div>
        </div>
    );
};

export default NavBer;