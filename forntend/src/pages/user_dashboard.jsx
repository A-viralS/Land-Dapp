import {UserTopbar, Footer2, AvailableProperty, } from '../components';
import { useState } from "react";
import styles from '../style';
import Web3 from 'web3';
import { search } from '../assets';

const user_dashboard = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [ethBalance, setEthBalance] = useState("");
  // const [ethAccount, setEthAccount] = useState("");

  const detectCurrentProvider = () =>{
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    }
    else if(window.web3){
      provider = window.web3.currentProvider;
    }
    else{
      alert("Non-ethereum browser detected. You should install Metamask.");
    }
    return provider
  }


  const onConnect = async() => {
    try{
      const currentProvider = detectCurrentProvider();
      if(currentProvider){
        await currentProvider.request({method: 'eth_requestAccounts'});
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance =await web3.eth.getBalance(account);
        setEthBalance(ethBalance);
        setIsConnected(true);
      }
    }
    catch(err){
      console.log(err);
    }
  }
  const onDisconnected = () =>{
    setIsConnected(false);
  }

  onConnect()

  return (
  
    <div className="bg-white w-full overflow-hidden h-full ">
    <UserTopbar/>
    <div>
    <div className={` w-full mt-[20px]`}>
      {
        isConnected && (
        <div className="flex flex-row pl-10">
          <h1 >
            Account Balance:&emsp;
          </h1>
            <p>
            {ethBalance} GoerliETH
            </p>
        </div>
        )
      }
        
       <form action="" method="" className={` ${styles.flexCenter} xs:${styles.flexLeft} ml-5 xs:float-right xs:mr-[10%] mb-10`}>
         <div className={` flex flex-row p-[10px] border mt-5  border-slate-900`} >
           <input type="text" className="ml-3 text-[18px] focus:outline-0 bg-transparent font-poppins" placeholder="Search land" />
           <img src={search} alt="Search" className="h-[30px] w-[30px]" />
         </div>
       </form>
       <div className="w-full flex t-[100px] xs:gap-36 gap-20  xs:flex-row flex-col justify-center text-center items-center">
         <div className=" w-[300px] h-[150px] bg-green-800 items-center pt-[40px] rounded-[10px]">
           <p className={` ${styles.paragraph}`}> Land Owned</p>
           <h1 className="text-white font-poppins text-[24px] font-bold">
             0
           </h1>
         </div>
         <div className=" w-[300px] h-[150px] bg-red-800 items-center pt-[40px] rounded-[10px]">
           <p className={` ${styles.paragraph}`}> Land Sold</p>
           <h1 className="text-white font-poppins text-[24px] font-bold">
             0
           </h1>
         </div>
       </div>
       <AvailableProperty/>
     </div>
    </div>
    <div className=" bottom-0 w-full">
    <Footer2/>
    </div>
  </div>
  
  )
}


export default user_dashboard