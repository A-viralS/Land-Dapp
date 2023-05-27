import { Footer2, UserTopbar } from '../components';
import { useState, useEffect } from "react";
import {approve_badge} from "../assets"


const profile = ({state, account}) => {

  const {contract} = state;
  const [errorMessage, setErrorMessage] = useState("");
  const [profile, setProfile] = useState([]);


  useEffect(() =>{
    const getProfile = async (event) => {
      const data = await contract.getUsers();
      setProfile(data)
      console.log(data)
    };
    contract && getProfile()

  }, [contract])

  const [isError, setError] = useState(false);
  function checkForError() {
    if(errorMessage){
      setError(true);
    }
  }
  
  
  return(
    <div className="flex flex-col bg-primary w-full overflow-hidden h-full relative">
      <div>
      <UserTopbar/>
      </div>
      <div className={`flex flex-col w-full mt-[20px] relative`}>

      {profile.map((profile) => (
        <>
          {profile.walletAddress.toLowerCase()==account &&
            <>
              <div className="w-full mt-10 z-[50]">
                {profile.verified ?
                  <span className={` absolute right-[30%] text-green-500 text-[24px]`}>
                    Verified
                  </span>
                  :
                  <span className={` absolute right-[30%] text-orange-500 text-[24px]`}>
                    Unverified
                  </span>
                }
                
                <div className="w-full flex flex-col gap-6 items-center">
                  <div className="flex flex-col my-3 xs:w-[80%] w-[100vw] gap-y-2 xs:pl-20 max-xs:px-5">

                    <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                        <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80">
                          Name
                        </div>
                        <div className="text-[16px] max-md:text-right text-white">{profile.firstName} {profile.lastName} </div>
                      </div>

                      <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                        <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80">
                        Wallet Address
                        </div>
                        <div className="text-[16px] max-md:text-right text-white">
                          {profile.walletAddress}
                        </div>
                      </div>

                      <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                        <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80">
                        Residential Address:
                        </div>
                        <div className="text-[16px] max-md:text-right text-white">{profile.residentialAddress}</div>
                      </div>

                      <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                        <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80">
                        Email
                        </div>
                        <div className="text-[16px] max-md:text-right text-white">{profile.emailAddress}</div>
                      </div>

                      <div className={` flex flex-row items-center xs:gap-10 border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                        <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80">
                        Contact Number
                        </div>
                        <div className="text-[16px] max-md:text-right text-white">{profile.contact}</div>
                      </div>

                      <div className={` flex flex-row items-center xs:gap-10 border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                        <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80">
                        Land Sold
                        </div>
                        <div className="text-[16px] max-md:text-right text-white">{profile.landSold.toString()}</div>
                      </div>
                    </div>
                  </div>
              </div>
            </>
          } 
        </>

      ))};
        <div className="w-[200px] h-[200px]">
          <div className="absolute z-[1] w-[20%] h-[25%] right-0 top-0 left-30 pink__gradient"></div>
          <div className="absolute z-[3] w-[40%] h-[40%] right-0 top-0 white__gradient"></div>
          <div className="absolute z-[2] w-[20%] h-[20%] right-0 top-0 blue__gradient"></div>
          <div className='absolute z-[1] w-[100vw] h-[100vh] opacity-80 right-0 top-0 bg-primary'></div>
            <img src={approve_badge} alt="WaterMark" className="absolute opacity-10  w-[800px] h-[800px] right-0 top-0 -z-[0]"/>
        </div>
      </div> 
      <div className=" bottom-0 w-full z-[50]">
        <Footer2/>
      </div>
    </div>
  )
}

export default profile