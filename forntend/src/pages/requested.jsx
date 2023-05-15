import {Footer2, UserTopbar, RequestDetail, } from '../components';
import {approve_badge} from "../assets";

const requested = ({state}) => (
  <div className="flex flex-col bg-primary w-full overflow-hidden h-full relative">
    <div>
    <UserTopbar/>
    </div>
      <div className={`flex flex-col w-full py-10 relative min-h-[77.5vh]`}>
        <RequestDetail state={state}/>
        <div className="w-[200px] h-[200px]">
          <div className="absolute z-[2] w-[20%] h-[25%] opacity-50 right-0 top-0 left-30 pink__gradient"></div>
          <div className="absolute z-[1] w-[40%] h-[40%] opacity-50 right-0 top-0 white__gradient"></div>
          <div className="absolute z-[3] w-[20%] h-[20%] right-0 top-0 blue__gradient"></div>
          <div className='absolute z-[1] w-[100vw] h-full opacity-80 right-0 top-0 bg-primary'></div>
            <img src={approve_badge} alt="WaterMark" className="absolute opacity-10  w-[800px] h-full right-0 top-0 -z-[0]"/>
        </div>
      </div>
    <div className="bottom-0 w-full z-[50]">
    <Footer2/>
    </div>
  </div>
)

export default requested