import { UserTopbar, Footer2, Requestdetails } from "../components";
import { useState, useEffect } from "react";
import styles from '../style';
import { approve_badge } from '../assets';

const user_dashboard = ({state, account}) => {
  const [count, setLandList] = useState([])
  const {contract} = state;
  const [errorMessage, setErrorMessage] = useState("");
  const [profile, setProfile] = useState([]);



  useEffect(() =>{
    const getCount = async (event) => {
      const data = await contract.countOwnerLands();
      const user = await contract.getUsers();
      setProfile(user)
      setLandList(data.toString())
    };
    contract && getCount()

  }, [contract])

  const [isError, setError] = useState(false);
  function checkForError() {
    if(errorMessage){
      setError(true);
    }
  }

  return (
  
    <div className="flex flex-col bg-primary w-full overflow-hidden h-full relative">
    <UserTopbar/>
    <div className=" min-h-[77.5vh]">
      <div className={`flex justify-center flex-col items-center relative pt-[50px]`}>
        <div className="w-full flex t-[100px] xs:gap-36 gap-20 mt-[150px]  xs:flex-row flex-col justify-center text-center items-center z-[50]">
          <div className=" w-[300px] h-[150px] bg-green-800 items-center pt-[40px] rounded-[10px]">
            <p className={` ${styles.paragraph}`}> Land Owned</p>
            <h1 className="text-white font-poppins text-[24px] font-bold">
            {count}
            </h1>
          </div>
          {profile.map((profile) => (
            <>
              {profile.walletAddress.toLowerCase()== account &&
                <>
                  <div className=" w-[300px] h-[150px] bg-red-800 items-center pt-[40px] rounded-[10px]">
                    <p className={` ${styles.paragraph}`}> Land Sold</p>
                    <h1 className="text-white font-poppins text-[24px] font-bold">
                      {profile.landSold.toString()}
                    </h1>
                  </div>
                </>
              } 
            </>
          ))};

        </div>
        {/* <Requestdetails state={state}/> */}
        <div className="w-[200px] h-[200px]">
          <div className="absolute z-[1] w-[20%] h-[25%] right-0 top-0 left-30 pink__gradient"></div>
          <div className="absolute z-[3] w-[40%] h-[40%] right-0 top-0 white__gradient"></div>
          <div className="absolute z-[2] w-[20%] h-[20%] right-0 top-0 blue__gradient"></div>
          <div className='absolute z-[1] w-[100vw] h-[100vh] opacity-80 right-0 top-0 bg-primary'></div>
            <img src={approve_badge} alt="WaterMark" className="absolute opacity-10  w-[800px] h-[800px] right-0 top-0 -z-[0]"/>
        </div>
      </div>
    </div>
    <div className=" bottom-0 w-full z-[50]">
    <Footer2/>
    </div>
  </div>
  
  )
}


export default user_dashboard