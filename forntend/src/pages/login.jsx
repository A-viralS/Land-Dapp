import styles from "../style"
import {dashboardGrowth, view, metalogo} from '../assets';
import dotenv from 'dotenv';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {Navbar, Footer2} from '../components';

// function ShowPassword() {
//   var x = document.getElementById("password");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }2
// }

const login = ({state, account}) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  
  const checkUser = async (event) => {
    event.preventDefault();
    const {contract} = state;
    
    try {
      // const users = await contract.getUsers();
      const users= ['0xe295bBBc446213D1E42B37f33AEEf79057aF326c']
      if (users && users.length > 0) {
        console.log("Hello")
        let userFound = false;
        for (let i = 0; i < users.length; i++) {
          if (users[i].toLowerCase() === account) {
            userFound = true;
            break;
          }
        }
        if (userFound) {
          // User is in the list
          console.log(users)
          console.log("User is authorized");
          navigate('/user dashboard', {replace: true});
          // Do something here
        } else {
          // User is not in the list
          console.log(users)
          console.log("User is not authorized");
          navigate('/user registration', {replace: true});
          // Do something here
        }
      }
      else{
        navigate(`/user registration`)
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const  checkCommissioner = async (event) => {
    event.preventDefault();  
    const contractAccount = "0xDA3B1f100c25c701AFF7af95f72FEdb119bC36BD";
    try {
      if (account === contractAccount.toLowerCase()) {
          // User is in the list
          console.log(account)
          console.log("User is authorized");
          navigate('/commissioner', {replace: true});
        } else {
          // Inspector is not in the list
          console.log(account)
          console.log("Account is not authorized");
          alert("Account is not authorized");
        }
      
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const checkLandInspector = async (event) => {
    console.log("etnering land")
    event.preventDefault();
    const {contract} = state;
    console.log("etnering land")
    
    try {
      console.log("hello")
      // const users = await contract.getInspectors(); 
      const users=['0xc2549643ef0D2C84C56cAD7Db90206561c0A7cd9']
      console.log("inspectors", users)
      if (users && users.length > 0) {
        let userFound = false;
        for (let i = 0; i < users.length; i++) {
          if (users[i].toLowerCase() === account) {
            userFound = true;
            break;
          }
        }
        if (userFound) {
          // User is in the list
          console.log(users)
          console.log("User is authorized");
          navigate('/inspector dashboard', {replace: true});
        } else {
          // Inspector is not in the list
          console.log("users",users)
          console.log("User is not authorized");
          alert("Inspector is not authorized");
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  
  return (
    <div className="bg-primary w-full flex flex-col relative">
      <div className={`${styles.paddingX} ${styles.flexCenter} z-[5]`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="flex flex-row mt-0">

        <div className={`top-0 ${styles.flexCenter}  relative`}>
          <img src={dashboardGrowth} alt="Robot Hand Image" className="w-[800px] h-[800px] relative z-[5] " />
          {/* hover:animate-pulse */}
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
          <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient'></div>
          <div className='absolute z-[0] w-[50%] h-[50%] right-40 bottom-40 blue__gradient'></div>
        </div>

        <section id='home' className={`text-center mb-10 h-[100vh] absolute z-50 right-[10%]`}>
          <div className={`flex flex-col ${styles.flexCenter} ${styles.boxWidth} mt-[200px]`}>

            <p className={` ${styles.paragraph} py-5`}>
              You Can Click On The Buttons Depending On The Type Of User You Are.
            </p>

            {/* ===========FORM=================== */}
            <form action={`#`} method="" className={`w-full ${styles.flexCenter} flex flex-col`}>
              {/* <div className={`flex flex-row bg-white px-[20px] py-[5px] border-radius mb-5 border-div border-dimWhite sm:w-[50%] md:w-[38%] w-[70%]`}>
                <input id="password" type="password" className={`text-[18px] font-poppins letterSpacing w-[100%] focus:outline-0`}  placeholder="Private Key"/>
                <img src={view} alt="Hid Password" className={`w-[30px] h-[30px]`} onClick={ShowPassword}/>
              </div> */}
              <div className={`${styles.flexCenter} flex flex-col`}>

                <div className="flex sm:flex-row flex-col gap-10 mb-10">

                  {/* User Button */}
                  <button id="user-btn" className={`py-10 border-radius px-6 bg-amber-gradient  font-poppins font-medium text-[18px] text-primary outline-none ${styles}`} onClick={checkUser}>
                    User
                  </button>

                  {/* Land Inspector Button */}

                  <button id="land-inspector-btn" className={`py-4 border-radius px-6 bg-amber-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`} onClick={checkLandInspector}>
                    Land Inspector
                  </button>

                  {/* Commissioner Button */}
                  <button id="commissioner-btn" className={`py-4 border-radius px-6 bg-amber-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`} onClick={checkCommissioner}>
                    Commissioner
                  </button>

                </div>

                <p className={` ${styles.paragraph}`}>
                  Or Click to Continue with Metamask <br />
                  {/* {ethBalance} */}
                  {/* Connected account : {account} */}
                  {account ? (
                    <p className="text-secondary text-[20px]">You Are Connected To</p>
                  ) :
                    (
                      <p className="text-red-900 text-[20px]">You Are Not Connected, Please Connect your MetaMask Wallet</p>
                    )}
                </p>
                <div id="meta-btn" className={`meta-btn`} >
                  <img src={metalogo} alt="Meta Logo" className={`meta-img`} />
                  <p className={`meta-p`}>MetaMask</p>
                </div>
                {/* {
                  !isConnected && (

                  )
                } */}
              </div>
            </form>
          </div>
        </section>
        
      </div>
      
      <Footer2 />
    </div>

  );
  
}

export default login



// handleUserClick
// handleLandInspectorClick
// handleCommissionerClick