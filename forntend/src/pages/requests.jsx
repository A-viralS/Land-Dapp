import {UserTopbar, Footer2, Requestdetails, } from '../components';
import styles from '../style';
import {search} from '../assets'

const requests = () => (

  <div className="bg-white w-full overflow-hidden h-full ">
  <UserTopbar/>
  <div className={` w-full bg-slate-300 flex flex-col`}>
      <form action="" method="" className={`flex ml-[60%]  xs:${styles.flexLeft} w-[400px] flex md:ml-[70%] xs:ml-[50px] pt-[50px] max-xs:ml-[20px]`}>
        <div className={` flex flex-row p-[10px] border mt-5 border-gray-900`} >
          <input type="text" className="ml-3 text-[18px] focus:outline-0 bg-transparent font-poppins" placeholder="Search land" />
          <img src={search} alt="Search" className="w-[30px] h-[30px]"/>
        </div>
      </form>
    <Requestdetails/>
  </div>
  <div className=" bottom-0 w-full">
  <Footer2/>
  </div>
</div>
)

export default requests