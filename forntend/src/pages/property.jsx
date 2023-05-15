// import styles from "../style"
import { Link } from 'react-router-dom';
import { Footer2, UserTopbar, PropertyDetail, } from '../components';
import { approve_badge } from '../assets';

const property = ({state}) =>{
  


  return(
    <div className="bg-primary flex flex-col w-full overflow-hidden h-full relative">
      <div>
      <UserTopbar/>
      </div>
      <div className="flex flex-col min-h-[77.5vh] relative">
        <div className="flex md:ml-[70%] xs:ml-[50px] pt-[50px] max-xs:ml-[20px]  z-[50]">
          <div className="">
              <Link to={"/register land"} className={`add-btn focus:bg-blue-300 focus:text-black`}>
                  ADD LAND
              </Link>
          </div>
        </div>
        <PropertyDetail state={state}/>
        <div className="w-[200px] h-[200px]">
          <div className="absolute z-[2] w-[20%] h-[25%] opacity-50 right-0 top-0 left-30 pink__gradient"></div>
          <div className="absolute z-[1] w-[40%] h-[40%] opacity-50 right-0 top-0 white__gradient"></div>
          <div className="absolute z-[3] w-[20%] h-[20%] right-0 top-0 blue__gradient"></div>
          <div className='absolute z-[1] w-[100vw] h-full opacity-80 right-0 top-0 bg-primary'></div>
            <img src={approve_badge} alt="WaterMark" className="absolute opacity-10  w-[800px] h-[800px] right-0 top-0 -z-[0]"/>
        </div>
      </div>
      <div className="relative bottom-0 w-full items-center z-[50]">
        <Footer2/>
      </div>
    </div> 
  );
} 

export default property