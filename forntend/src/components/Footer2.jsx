import styles from "../style"
// import {logo1 } from "../assets"
import { socialMedia } from "../constants"
const Footer2 = () => (
  // ${styles.paddingY}
  <section className={`${styles.flexCenter} flex-col pb-5 h-[70px] border-t border-t-cyan-300 border-opacity-10 `}>
    <div className={`w-full flex justify-between items-center md:flex-row flex-col pt-6`}>
      <p className=" md:ml-[50px] font-poppins font-normal text-[18px] text-center leading-[27px] text-white">
      &copy;  2023 Company, All Rights Reserved.
      </p>
      {/* <div className="flex flex-row  md:mt-0 mt-6 mr-[100px]" >
        {socialMedia.map((social, index) =>(
          <img key={social.id} src={social.icon} alt={social.id}
          className={`w-[21px]  object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'mr-4' : 'mr-0'}`} />
        ))}
      </div> */}
    </div>
{/* 
    <div className="h-fit max-xs:h-[30vh] w-[100%] bg-pink-300">
    <div className={` w-[100%] h-[23px] bg-green-800 mt-[0px]`}>
    </div>
    <div className={` w-[100%] h-[22px] bg-green-800 mt-[1px]`}>
    </div>
    <div className={` w-[100%] h-[21px] bg-green-800 mt-[2px]`}>
    </div>
    <div className={` w-[100%] h-[20px] bg-green-800 mt-[3px]`}>
    </div>
    <div className={` w-[100%] h-[19px] bg-green-800 mt-[4px]`}>
    </div>
    <div className={` w-[100%] h-[18px] bg-green-800 mt-[5px]`}>
    </div>
    <div className={` w-[100%] h-[17px] bg-green-800 mt-[6px]`}>
    </div>
    <div className={` w-[100%] h-[16px] bg-green-800 mt-[7px]`}>
    </div>
    <div className={` w-[100%] h-[15px] bg-green-800 mt-[8px]`}>
    </div>
    <div className={` w-[100%] h-[14px] bg-green-800 mt-[9px]`}>
    </div>
    <div className={` w-[100%] h-[13px] bg-green-800 mt-[10px] `}>
    </div>
    <div className={` w-[100%] h-[12px] bg-green-800 mt-[11px]`}>
    </div>
    <div className={` w-[100%] h-[11px] bg-green-800 mt-[12px]`}>
    </div>
    <div className={` w-[100%] h-[10px] bg-green-800 mt-[13px]`}>
    </div>
    <div className={` w-[100%] h-[9px] bg-green-800 mt-[14px]`}>
    </div>
    <div className={` w-[100%] h-[8px] bg-green-800 mt-[15px]`}>
    </div>
    <div className={` w-[100%] h-[7px] bg-green-800 mt-[16px]`}>
    </div>
    <div className={` w-[100%] h-[6px] bg-green-800 mt-[17px]`}>
    </div>
    <div className={` w-[100%] h-[5px] bg-green-800 mt-[18px]`}>
    </div>
    <div className={` w-[100%] h-[4px] bg-green-800 mt-[19px]`}>
    </div>
    <div className={` w-[100%] h-[3px] bg-green-800 mt-[20px]`}>
    </div>
    <div className={` w-[100%] h-[2px] bg-green-800 mt-[21px]`}>
    </div>
    <div className={` w-[100%] h-[1px] bg-green-800 mt-[22px]`}>
    </div>
    <div className={` w-[100%] h-[0px] bg-green-800 mt-[23px]`}>
    </div>
    <div className={` w-[100%] h-[0px] bg-green-800 mt-[100px] max-xs:mt-[80px]`}>
    </div>
    </div> */}
  </section>
)

export default Footer2