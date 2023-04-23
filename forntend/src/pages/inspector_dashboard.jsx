import {Topnav, Footer2,} from '../components';
import { useState, useEffect } from "react";
import styles from '../style';
import { ethers } from 'ethers';

const inspector_dashboard = ({state, account}) => {
  const [List, setLandList] = useState([])
  const {contract} = state;

  useEffect(() =>{
    const getInspectorsDetails = async (event) => {
      const data = await contract.getInspectors()
      setLandList(data)
      console.log(data)
    };
    contract && getInspectorsDetails()
  }, [contract])

  return (
  
    <div className="bg-white w-full overflow-hidden h-full ">
        <Topnav/>
        
        <div>
            <div className={` w-full mt-[20px]`}>
              {List.map((inspector) => (
                <div>
                   {inspector.walletAddress.toLowerCase() === ethereum.selectedAddress ?
                  <div className="w-full h-[70vh] flex t-[100px] xs:gap-36 gap-20  xs:flex-row flex-col justify-center text-center items-center" key={Math.random()}>
                    <div className=" w-[300px] h-[150px] bg-indigo-800 items-center pt-[40px] rounded-[10px]">
                        <p className={` ${styles.paragraph}`}> Land Verified</p>
                        <h1 className="text-white font-poppins text-[24px] font-bold">
                        {inspector.verifiedLand.toString()}
                        </h1>
                    </div>
                    <div className=" w-[300px] h-[150px] bg-purple-800 items-center pt-[40px] rounded-[10px]">
                        <p className={` ${styles.paragraph}`}> User Verified</p>
                        <h1 className="text-white font-poppins text-[24px] font-bold">
                            {inspector.verifiedUser.toString()}                          
                        </h1>
                    </div>
                  </div>
                  :
                  <>
                  </>
                  }
                </div>
              ))}
            </div>
        </div>

        <div className=" bottom-0 w-full">
         <Footer2/>
        </div>
    </div>
  )
//   <form action="" method="" className={` ${styles.flexCenter} xs:${styles.flexLeft} ml-5 xs:float-right xs:mr-[10%] mb-10`}>
//   <div className={` flex flex-row p-[10px] border mt-5  border-slate-900`} >
//     <input type="text" className="ml-3 text-[18px] focus:outline-0 bg-transparent font-poppins" placeholder="Search land" />
//     <img src={search} alt="Search" className="h-[30px] w-[30px]" />
//   </div>
// </form>
}


export default inspector_dashboard