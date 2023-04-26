import { Footer2, UserTopbar } from '../components';
import { useState, useEffect } from "react";


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
    <div className=" bg-slate-300 w-full overflow-hidden h-full">
      <div>
      <UserTopbar/>
      </div>
      <div className={` w-full mt-[20px]`}>

      {profile.map((profile) => (
        <>
          {profile.walletAddress.toLowerCase()==account &&
            <>
              <div className="w-full mt-10">
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
                        <div className=" font-bold text-[20px] w-[200px]">
                          Name
                        </div>
                        <div className="text-[16px] max-md:text-right">{profile.firstName} {profile.lastName} </div>
                      </div>

                      <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                        <div className=" font-bold text-[20px] w-[200px]">
                        Wallet Address
                        </div>
                        <div className="text-[16px] max-md:text-right">
                          {profile.walletAddress}
                        </div>
                      </div>

                      <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                        <div className=" font-bold text-[20px] w-[200px]">
                        Residential Address:
                        </div>
                        <div className="text-[16px] max-md:text-right">{profile.residentialAddress}</div>
                      </div>

                      <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                        <div className=" font-bold text-[20px] w-[200px]">
                        Email
                        </div>
                        <div className="text-[16px] max-md:text-right">{profile.emailAddress}</div>
                      </div>

                      <div className={` flex flex-row items-center xs:gap-10 border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                        <div className=" font-bold text-[20px] w-[200px]">
                        Contact Number
                        </div>
                        <div className="text-[16px] max-md:text-right">{profile.contact}</div>
                      </div>
                    </div>
                  </div>
              </div>
            </>
          } 
        </>

      ))};
      </div> 
      <div className="relative bottom-0 w-full items-center">
        <Footer2/>
      </div>
    </div>
  )
}

export default profile