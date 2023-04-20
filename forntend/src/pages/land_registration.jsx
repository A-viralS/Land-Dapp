import React from 'react'
import { Footer2, UserTopbar, UserNavbar, } from '../components'

const land_registration = ({state}) => (
  <div className="bg-primary w-full overflow-hidden h-full absolute">
    {/* <UserNavbar/> */}
    <div className='absolute z-[1]'>
      <UserTopbar/>
    </div>    <div className="absolute bottom-0 w-full">
      <Footer2/>
    </div>
  </div>
)

export default land_registration