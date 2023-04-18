import React from 'react'
import { Footer2, InspectorSidenav, Topnav, } from '../components'

const land_inspector = () => (
  <div className="bg-white w-full overflow-hidden h-full absolute">
    <div className=''>
      <InspectorSidenav/>
      </div>
      
      <div className="absolute bottom-0 w-full">
      <Footer2/>
    </div>
  </div>
)

export default land_inspector