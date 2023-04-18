import React from 'react';
import { Footer2, UserTopbar, UserForm } from '../components';


const user_registration = ({state}) => {

  return(
  
  <div className="bg-white w-full overflow-hidden h-full ">
    <UserTopbar/>
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