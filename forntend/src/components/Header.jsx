import styles from '../style';
import {discount, robot, blockchain} from '../assets';
import GetStarted from './GetStarted'

const Header = () => (
    <section id='' className={`w-[full] h-[600px] bg-slate-900`}>

    </section>
)
//   <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

//     <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
//       <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
//         <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
//         <p className={`${styles.paragraph} ml-2`}>
//           <span className='text-white'>
//             Ghana
//           </span> Land Registration{" "}
//           <span className='text-white'>
//             And Ownership
//           </span> System
//         </p>
//       </div>
//       <div className="flex flex-row justify-between items-center w-full">
//         <h1 className="flex-1 font-poppins font-semibold ss:text[72px] text-[70px] text-white ss:leading-[100px] leading-[75px]">
//           The Next <br  className='sm:block hidden'/>{" "}
//            <span className=' text-[70px] text-gradient'> Generation OF Land</span>{" "}
//         </h1>
//         <div className='ss:flex hidden md:mr-4 mr-0'> 
//           <GetStarted />
//         </div>
//       </div>
//       <h1 className=" font-poppins font-semibold ss:text[68px] text-[70px] text-white ss:leading-[100px] leading-[75px] w-full">
//       Registration.
//       </h1>
//       <p className={` ${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
//         With traditional land registration systems, there are often issues of fraud, corruption, and errors in documentation, leading to disputes over land ownership. Blockchain technology solves these problems by providing a decentralized and immutable ledger of all property transactions, which can be accessed by anyone on the network.
//       </p>
//     </div>
   
//     <div className={`flex-1 flex  ${styles.flexCenter} md:my-0 my-10 relative`}>
//       <img src={blockchain} alt="Robot Hand Image" className="w-[100%] h-[100%] relative z-[5] hover:animate-pulse"/>

//       <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
//       <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient'></div>
//       <div className='absolute z-[0] w-[50%] h-[50%] right-40 bottom-40 blue__gradient'></div>
//     </div>
//     <div className={`${styles.flexCenter} ss:hidden`}>
//       <GetStarted />
//     </div>
//   </section>

export default Header