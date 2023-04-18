import React from 'react'
import { Footer2, UserTopbar,Form } from '../components'

const register_land = () => (
  <div className="bg-white w-full overflow-hidden h-full ">
    <UserTopbar/>
    <div>
      <Form/>
    </div>
    <div className=" bottom-0 w-full">
      <Footer2/>
    </div>
  </div>
)

export default register_land