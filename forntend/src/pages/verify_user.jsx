import { Footer2, Topnav, } from '../components'
import { useEffect, useState, React } from "react";
import ErrorMessage from "../components/ErrorMessage";

const verify_user = ({state}) =>{
  const [userList, setUserList] = useState([])
  const [errorMessage, setErrorMessage] = useState("");
  const {contract} = state;

  useEffect(() =>{
    const getUnverifiedUser = async (event) => {
      const data = await contract.getNonVerifiedUsers();
      setUserList(data)
      // console.log(data)
    };
    contract && getUnverifiedUser()
  }, [contract])

  const [isError, setError] = useState(false);
  function checkForError() {
    if(errorMessage){
      setError(true);
    }
  }

  const verifyUser = async (event) => {
    event.preventDefault();
    const _userId = document.querySelector("#userid").value;
    
    try {
      if (_userId) {
        console.log("Transaction Is In Progress.");
        alert("Transaction Is In Progress.")
        const transaction = await contract.verifyUser(_userId);
        await transaction.wait();
        console.log("Transaction Is Successful.");
        alert("Transaction Is Successful.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while verifying the User", error.message);
    }
  checkForError()
  }
  
  
  return (
    <div className="bg-white w-full overflow-hidden h-full ">
      <Topnav/>
      <div>
        <div className="flex justify-center my-3 ">
          {userList.length === 0 ? (
            <p className="text-[24px] text-red-700 my-[100px]">There is no User Pending to be Verified.</p>
          ) : (
            userList.map((user)=>(
              <>
                <div className="flex border-gray-400 border w-[90%] max-ss:w-[70%] max-xs:w-[85%] flex-col my-10">
                  <div>
                    <h1 className=" max-ss:ml-[40%] ml-[40px]">User Details</h1>
                  </div>
        
                  <div className={`flex flex-row ss:p-[20px] py-[20px] ss:gap-[10%] items-center  max-xs:my-4 max-ss:flex-col`}>
        
                    <div className="justify-center items-center ss:w-[15%] w-full">
                      <div className=" max-ss:border-b border-black max-ss:w-[100%] flex max-ss:flex-row flex-col justify-left ">
                      <p className="p-[10px] text-center max-ss:text-slate-900 max-ss:ml-[40px]">
                        Name
                      <hr className="w-full  bg-black max-ss:opacity-0" />
                      </p>
                      <h3 className="p-[10px] text-center font-poppins font-normal max-ss:text-slate-500 max-md:text-[14px] break-all text-[16px] ss:mt-[20px]">
                        {user.firstName} {user.lastName}
                      </h3>
        
                      </div>
                    </div>
        
                    <div className="justify-center items-center ss:w-[15%] w-full flex-wrap ">
                      <div className=" max-ss:border-b border-black max-ss:w-[100%] flex max-ss:flex-row flex-col justify-left ">
                      <p className="p-[10px] text-center max-ss:text-slate-900 max-ss:ml-[40px]">
                        Email
                      <hr className="w-full  bg-black max-ss:opacity-0" />
                      </p>
                      <h3 className="p-[10px] text-center font-poppins font-normal max-ss:text-slate-500 break-all text-[16px] ss:mt-[20px]">
                        {user.emailAddress}
                      </h3>
        
                      </div>
                    </div>
        
                    <div className="justify-center items-center ss:w-[15%] w-full">
                      <div className=" max-ss:border-b border-black max-ss:w-[100%] flex max-ss:flex-row flex-col justify-left ">
                      <p className="p-[10px] text-center max-ss:text-slate-900 max-ss:ml-[40px]">
                        Contact
                      <hr className="w-full  bg-black max-ss:opacity-0" />
                      </p>
                      <h3 className="p-[10px] text-center font-poppins font-normal max-ss:text-slate-500  text-[16px] ss:mt-[20px]">
                        {user.contact}
                      </h3>
        
                      </div>
                    </div>
        
                    <div className="justify-center items-center ss:w-[15%] w-full">
                      <div className=" max-ss:border-b border-black max-ss:w-[100%] flex max-ss:flex-row flex-col justify-left ">
                      <p className="p-[10px] text-center max-ss:text-slate-900 max-ss:ml-[40px]">
                        Ghana Card
                      <hr className="w-full  bg-black max-ss:opacity-0" />
                      </p>
                      <h3 className="p-[10px] text-center font-poppins font-normal max-ss:text-slate-500  text-[16px] ss:mt-[20px]">
                        {user.ghanaCard}
                      </h3>
        
                      </div>
                    </div>
        
                  </div>
                    <div className="  max-ss:ml[60%] max-xs:ml-5 ml-[70%]">
                      <form onSubmit={verifyUser}>
                        <div>
                          <button id='userid' value={user.userId.toString()}  className={`addUser-btn focus:bg-blue-300 focus:text-black max-ss:px-[40px]`}>Verify</button>
                        </div>
                      </form>
                    </div>
        
                </div>
              </>
            ))
          )}
        </div>
      </div>
      <div className=" bottom-0 w-full">
      <Footer2/>
      </div>
    </div>
  );
}


export default verify_user