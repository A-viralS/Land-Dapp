import React from 'react';
import {back, logo1, approve_badge,} from '../assets';
import { Footer2, UserForm } from '../components';
import { useNavigate } from 'react-router-dom';


const user_registration = ({state}) => {
  const navigate = useNavigate();

  return(
  
  <div className="bg-primary w-full overflow-hidden h-full ">
    <div>
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo1} alt="Logo" className='w-[100px] h-[52px]'/>

        <div>
          <button className="flex flex-row w-full mr-10 justify-center align-middle" onClick={() => navigate("/login")}>
            <img src={back} alt="back" className='w-[30px] h-[30px]'/>
            <p className=" text-[18px] text-white">
              Go Back
            </p>
          </button>
        </div>
    </nav>
    </div>
    <div className="flex flex-col relative">
    <UserForm state={state}/>
      <div className="w-[200px] h-[200px]">
        <div className="absolute z-[1] w-[20%] h-[25%] right-0 top-0 left-30 pink__gradient"></div>
        <div className="absolute z-[3] w-[40%] h-[40%] right-0 top-0 white__gradient"></div>
        <div className="absolute z-[2] w-[20%] h-[20%] right-0 top-0 blue__gradient"></div>
        <div className='absolute z-[1] w-[100vw] h-[100vh] opacity-80 right-0 top-0  -primary'></div>
        <img src={approve_badge} alt="WaterMark" className="absolute opacity-10  w-[800px] h-[800px] right-0 top-0 -z-[0]"/>
      </div>
    </div>
    <div className=" bottom-0 w-full z-[50]">
    <Footer2/>
    </div>
  </div>

  )

}

export default user_registration