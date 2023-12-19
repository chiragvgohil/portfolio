import React from 'react';
// icon
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
// link
import { Link } from 'react-scroll';


const Nav = () => {
  return <nav className='fixed bottom-2   lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
      <div className='w-full bg-black/20 backdrop-blur-2xl h-[96px] rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
        <Link offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' to='home' activeClass='active' smooth={true} spy={true}>
          <BiHomeAlt />
        </Link>

        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' to='about' activeClass='active' smooth={true} spy={true}>
          <BiUser />
        </Link>

        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' to='services' activeClass='active' smooth={true} spy={true}>
          <BsClipboardData />
        </Link>

        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' to='work' activeClass='active' smooth={true} spy={true}>
          <BsBriefcase/>
        </Link>

        <Link  className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' to='contact' activeClass='active' smooth={true} spy={true}>
          <BsChatSquare />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
