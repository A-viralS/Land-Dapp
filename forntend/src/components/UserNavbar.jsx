import {useState } from 'react'

import {close, logo1, menu, back } from '../assets';
const UserNavbar = () => (
    <div className={` bg-slate-600 ss:px-10 px-2 fixed w-full z-[2]`}>
      <nav className='w-full flex py-6 items-center gap-[30%]'>
      <a id="back-icon" href="" className={``}><img src={back} alt="Go back" className="w-[40px] h-[40px]"/></a>
      <h1 className=" font-bold text-[24px]">
        Property
      </h1>
    </nav>
    </div>
)

export default UserNavbar