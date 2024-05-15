import React, { useRef, useState } from 'react';
import logo from '../components/logo/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';




const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  

    return (
        <>
                <div                
                className="h-24 max-w-7xl bg-slate-300 flex justify-between items-center mx-auto px-4"> 
                    <div onClick={handleClick} className="z-10 max-w-7xl">
                    {!nav ? <FaBars  className="cursor-pointer text-3xl"/> : <FaTimes className="cursor-pointer text-3xl font-light"/>}
                    </div>
                    <div>
                        <ul className={!nav ? 'hidden' : "absolute top-0 left-0  w-full h-screen bg-slate-300 flex flex-col justify-center items-center menu-link-item-holder"}>
                            <li className="py-6 my-6 p-32 hover:bg-[#ff5555] hover:rounded text-8xl text-[#272727] cursor-pointer font-light hover:text-slate-300"><Link onClick={handleClick} to="home"  smooth={true} duration={700}>Home</Link></li>
                            <li className="py-6 my-6 p-32 boder-b hover:bg-[#ff5555] hover:rounded text-8xl text-[#272727] cursor-pointer font-light hover:text-slate-300"><Link onClick={handleClick} to="about" smooth={true} duration={700}>About</Link></li>
                            <li className="py-6 my-6 p-32 boder-b hover:bg-[#ff5555] hover:rounded text-8xl text-[#272727] cursor-pointer font-light hover:text-slate-300"><Link onClick={handleClick} to="works" smooth={true} duration={700}>Works</Link></li>
                            <li className="py-6 my-6 p-32 boder-b hover:bg-[#ff5555] hover:rounded text-8xl text-[#272727] cursor-pointer font-light hover:text-slate-300"><Link onClick={handleClick} to="contact" smooth={true} duration={700}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="w-60"> 
                        <img  src={logo} alt='Logotipo' />
                    </div>
                </div>
        </>
    );
};

export default Navbar;