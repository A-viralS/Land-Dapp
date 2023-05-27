import React from 'react'
import { Footer2, UserTopbar,Form } from '../components'

const register_land = ({state}) => (
  <div className="flex flex-col bg-primary w-full overflow-hidden h-full relative">
    <UserTopbar/>
    <div className="z-[50]">
      <Form state={state}/>

    </div>
    <div className=" bottom-0 w-full z-[50]">
      <Footer2/>
    </div>
  </div>
)

export default register_land