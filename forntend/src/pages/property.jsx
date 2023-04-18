// import styles from "../style"
import { Link } from 'react-router-dom';
import { Footer2, UserTopbar, PropertyDetail, } from '../components';

const property = () => (
  <div className=" w-full overflow-hidden h-full">
    {/* <UserNavbar/> */}
    <div>
    <UserTopbar/>
    </div>
    <div className={` w-full bg-slate-300`}>
      <div className="flex md:ml-[70%] xs:ml-[50px] pt-[50px] max-xs:ml-[20px]">
        <div className="">
            <Link to={"/register land"} className={`add-btn focus:bg-blue-300 focus:text-black`}>
                ADD LAND
            </Link>
        </div>
      </div>
      <PropertyDetail/>
      <PropertyDetail/>
      <PropertyDetail/>
      <PropertyDetail/>
    </div>
    <div className="relative bottom-0 w-full items-center">
      <Footer2/>
    </div>
  </div>
  
)

export default property