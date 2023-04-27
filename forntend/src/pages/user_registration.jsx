import React from 'react';
import {back, logo1, menu,} from '../assets';
import { Footer2, UserForm } from '../components';
import { useNavigate } from 'react-router-dom';


const user_registration = ({state}) => {
  const navigate = useNavigate();

  return(
  
  <div className="bg-white w-full overflow-hidden h-full ">
    <div>
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo1} alt="Logo" className='w-[100px] h-[52px]'/>

        <div>
          <button className="flex flex-row w-full mr-10 justify-center align-middle" onClick={() => navigate("/login")}>
            <img src={back} alt="back" className='w-[30px] h-[30px]'/>
            <p className=" text-[18px]">
              Go Back
            </p>
          </button>
        </div>
    </nav>
    </div>
    <div>
    <UserForm state={state}/>
    </div>
    <div className=" bottom-0 w-full">
    <Footer2/>
    </div>
  </div>

  )

}

export default user_registration