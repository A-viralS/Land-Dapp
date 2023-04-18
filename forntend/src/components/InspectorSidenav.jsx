import {useState } from 'react'

import {close, logo1, menu, back, dashboard, } from '../assets';
import styles from "../style"
import Web3 from 'web3';

import {inspectorLinks} from '../constants';
import { Link } from 'react-router-dom';

const InspectorSidenav = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  const [ethAccount, setEthAccount] = useState("");

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
  const ethDetails=  () =>{
    let ethBalance = web3.eth.getBalance(account);
    let ethAccount =  web3.eth.getAccounts();
    setEthBalance(ethBalance);
    setEthAccount(ethAccount)
    return ethBalance
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
        let ethAccount = await web3.eth.getAccounts();
        setEthBalance(ethBalance);
        setEthAccount(ethAccount)
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
    const [toggle, setToggle] = useState(false);

    return (
      <div>
        <nav className='w-full flex py-6 justify-between items-center navbar'>
          <img src={logo1} alt="Logo" className='w-[100px] h-[52px]'/>
  
          <ul className='list-none sm:flex hidden justify-end items-center flex-1 mr-10'>
            { inspectorLinks.map((nav, index) =>(
              <li 
                key={nav.id} className={`font-poppins font-normal cursor-pointer hover:text-secondary text-[16px] ${index === inspectorLinks.length-1 ? 'mr-0' : 'mr-20'} active:text-secondary text-black`}
              >
                <Link to={nav.id}>
                  {nav.title}
                </Link>
              </li>
            ))}
            <form action="login" method="">
                <button id="meta-btn" className={` `} onClick={onDisconnected} >
                  <p className={`meta-p pl-10`}>logout</p>
                </button>                  
            </form>
          </ul>
  
          <div className="sm:hidden flex flex-1 justify-end items-center">
              <div className={` ${toggle ? 'hidden' : 'block'} bg-black  rounded-[10px] mr-8 p-2`}>
                  <img src={menu} alt="menu" className={` ${toggle ? 'hidden' : 'block'} w-[28px] h-[28px] object-contain`} onClick={() => setToggle((prev) => !prev)}/>
  
              </div>
  
            <div className={`${toggle ? 'flex' :'hidden'} flex flex-col p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl side-bar`}>
              <div className="bg-black  rounded-[10px] p-2">
                  <img src={close} alt="menu" className={` ${toggle ? 'block' : 'hidden'} w-[28px] h-[28px] object-contain`} onClick={() => setToggle((prev) => !prev)}/>
  
              </div>
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
              { inspectorLinks.map((nav, index) =>(
                <li 
                  key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === inspectorLinks.length-1 ? 'mr-0' : 'mb-10'} text-white`}
                >
                  <Link to={nav.id}>
                    {nav.title}
                  </Link>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}


export default InspectorSidenav






// import React from 'react'
// import { useState } from 'react';
// import { inspectorLinks } from '../constants'
// import {close, logo1, menu, back } from '../assets';


// const InspectorSidenav = () => {
//     const [toggle, setToggle] = useState(false);
//     return(
//         <div className=" mt-[50px] pt-[20px] ">
//             <img src={menu} alt="menu" className={` ${toggle ? 'hidden' : 'block' } mt-[30px] fixed  ml-3 w-[28px] h-[28px] object-contain`} onClick={() => setToggle((prev) => !prev)}/>
            
//             <div className="sm:hidden pt-[30px] flex flex-1 justify-end items-center bg-slate-400 fixed">

//                 <div className={`${toggle ? 'flex' :'hidden'}`}>
                

//                 <ul className="navbar pb-[50px] flex flex-col">
//                 <img src={close} alt="close" className={` ${toggle ? 'block' : 'hidden' } ml-3 mb-8 w-[28px] h-[28px] object-contain`} onClick={() => setToggle((prev) => !prev)}/>
//                     {inspectorLinks.map((InspectorSidenav, id) => (
//                         <li key={InspectorSidenav.id} className="nav-item p-4">
//                         <a className="nav-icon flex flex-row pl-2 hover:text-cyan-500  active:text-cyan-500 " href={InspectorSidenav.id}>
//                             <img src={InspectorSidenav.icon} className="side-icon"/>
//                             <span className="nav-span">
//                                 {InspectorSidenav.title}
//                             </span>
//                         </a>
//                     </li>
//                     ))}
        
//                     <li className="logout-btn mt-[150px] mx-[30px]">
//                         <a className="hover:logout active:logout" href="logout">logout</a>
//                     </li>

//                 </ul>
//                 </div>
//             </div>
            
//             <nav className={`mainSidebar sm:flex hidden flex-col hover:s-transition hover:w-[200px] bg-white`}>
            
//                 <ul className="navbar mt-[100px] pb-[50px] ">
//                     {inspectorLinks.map((InspectorSidenav, id) => (
//                         <li key={InspectorSidenav.id} className="nav-item p-4">
//                         <a className="nav-icon flex flex-row pl-2 hover:text-cyan-500  active:text-cyan-500 " href={InspectorSidenav.id}>
//                             <img src={InspectorSidenav.icon} className="side-icon"/>
//                             <span className="nav-span">
//                                 {InspectorSidenav.title}
//                             </span>
//                         </a>
//                     </li>
//                     ))}
        
//                     <li className="logout-btn mt-[150px] mx-[30px]">
//                         <a className="hover:logout active:logout" href="logout">logout</a>
//                     </li>

//                 </ul>
//             </nav>
            
//         </div>
//     )
// }

// export default InspectorSidenav