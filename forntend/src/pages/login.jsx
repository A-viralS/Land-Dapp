import styles from "../style"
import {login_image, view, metalogo} from '../assets';

import { useState } from "react";
import {Navbar, Footer2, } from '../components';
import { redirect } from "react-router-dom";

function ShowPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const login = ({state, account}) => {

  // const [state, setState] = useState({
  //   provider:null,
  //   signer:null,
  //   contract:null
  // })
  // const [account, setAccount] = useState('Not Connected')

  // useEffect(()=>{
  //   const template=async()=>{
  //     const contractAddress="0x9C548a28c9BD60594F0FE095EAb010859Efe546B";
  //     const contractABI=abi.abi;

  //     //Metamask Part
  //     //1. In order to do transactions on goerli testnet
  //     //Metamask consist of infura
  //     try{
  //       const {ethereum}=window;
  //       const account = await ethereum.request({
  //         method: "eth_requestAccounts"
  //       })
  //       window.ethereum.on("accountsChanged", ()=>{window.location.reload()})
  //       setAccount(account);
  //       const provider = new ethers.providers.Web3Provider(ethereum);//read the blockchain
  //       const signer = provider.getSigner();//write the blockchain
  //       const contract = new ethers.Contract(contractAddress,
  //         contractABI,
  //         signer
  //       )
  //       console.log(contract)
  //       setState({provider,signer,contract});
  //       // return contract.getUsers
  //     }catch(error){
  //       alert(error);
  //     }
  //   }
  //   template();
  // }, [])
  const [data, setData] = useState(null);

  const checkUser= async(event)=>{
    event.preventDefault();
    const {contract} = state;

    try{
      const data1 = await contract.getUsers();
      if (data1){
        console.log("Users:", data1)
        console.log("Users:", data)
      }
      setData(data1);
      alert("Gotten Users Successfully.")
    }catch(error)
    {
      
      console.log("Error")
    }
  }

  return (
  
    <div className="bg-primary w-full overflow-hidden">
      <div className= {`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar />
        </div>
      </div>

      <section id='home' className={`flex flex-col items-center md:flex-row text-center`}>
        <div className={`flex flex-col ${styles.flexCenter} bg-primary ${styles.boxWidth}`}>

          <div className={`flex-1 flex  ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={login_image} alt="Robot Hand Image" className="w-[400px] h-[250px] relative z-[5]"/>

            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
            <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient'></div>
            <div className='absolute z-[0] w-[50%] h-[50%] right-40 bottom-40 blue__gradient'></div>
        </div>
          <p className={` ${styles.paragraph} py-5`}>
          You can enter private key to your wallet here. Or enter your Metamask wallet
          </p>

          {/* ===========FORM=================== */}
          <form action={`#`} method="" className={`w-full ${styles.flexCenter} flex flex-col`}>
          <div className={`flex flex-row bg-white px-[20px] py-[5px] border-radius mb-5 border-div border-dimWhite sm:w-[50%] md:w-[38%] w-[70%]`}>
            <input id="password" type="password" className={`text-[18px] font-poppins letterSpacing w-[100%] focus:outline-0`}  placeholder="Private Key"/>
            <img src={view} alt="Hid Password" className={`w-[30px] h-[30px]`} onClick={ShowPassword}/>
          </div>
          <div className={`${styles.flexCenter} flex flex-col`}>
            <button id="login-btn" className={`login-btn`}>
              Continue
            </button>
            <p className={` ${styles.paragraph}`}>
              Or Click to Continue with Metamask <br />
              {/* {ethBalance} */}
              Connected account : {account}
            </p>
                <button id="meta-btn" className={`meta-btn mb-[100px]`} onClick={checkUser} >
                  <img src={metalogo} alt="Meta Logo" className={`meta-img`}/>
                  <p className={`meta-p`}>MetaMask</p>
                </button>
            {/* {
              !isConnected && (
                
              )
            } */}
          </div>
          </form>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}

export default login





// const [isConnected, setIsConnected] = useState(false);
// const [ethBalance, setEthBalance] = useState("");
// // const [ethAccount, setEthAccount] = useState("");

// const detectCurrentProvider = () =>{
//   let provider;
//   if (window.ethereum) {
//     provider = window.ethereum;
//   }
//   else if(window.web3){
//     provider = window.web3.currentProvider;
//   }
//   else{
//     alert("Non-ethereum browser detected. You should install Metamask.");
//   }
//   return provider
// }

// const onConnect = async() => {
//   try{
//     const currentProvider = detectCurrentProvider();
//     if(currentProvider){
//       await currentProvider.request({method: 'eth_requestAccounts'});
//       const web3 = new Web3(currentProvider);
//       const userAccount = await web3.eth.getAccounts();
//       const account = userAccount[0];
//       let ethBalance =await web3.eth.getBalance(account);
//       let ethAccount = await web3.eth.getAccounts();
//       setEthBalance(ethBalance);
//       setIsConnected(true);
//     }
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// const onDisconnected = () =>{
//   setIsConnected(false);
// }