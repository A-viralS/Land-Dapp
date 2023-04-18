import {useState} from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {close, logo1, menu } from '../assets';

import {navLinks} from '../constants';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div>
      <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo1} alt="Logo" className='w-[100px] h-[52px]'/>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            { navLinks.map((nav, index) =>(
              <li 
                key={nav.id} className={`font-poppins font-normal cursor-pointer hover:text-secondary text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-20'} active:text-secondary text-white`}
              >
                <Link to={nav.id}>
                  {nav.title}
                </Link>
              </li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}/>

          <div className={`${toggle ? 'flex' :'hidden'} p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl side-bar`}>
            
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
            { navLinks.map((nav, index) =>(
              <li 
                key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-10'} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar