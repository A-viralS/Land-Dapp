import styles from "../style"
import {logo1 } from "../assets"
import { footerLinks, socialMedia } from "../constants"
const Footer = () => (
  <section className={`${styles.flexCenter} flex-col pt-6 sm:pt-16`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start">
        <img 
        src={logo1} 
        alt="GLS" 
        className="w-[100px] h-[100px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to register and own a land, reliably and securely.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[20px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) =>(
                <li key={link.name} className={` ${index !== footerLink.links.length-1 ? 'mb-5' : 'mb-0'} font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`} >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
      <p className="font-poppins font-normal text-[18px] text-center leading-[27px] text-white">
      &copy;  2023 Company, All Rights Reserved.
      </p>

      <div className="flex flex-row  md:mt-0 mt-6" >
        {socialMedia.map((social, index) =>(
          <img key={social.id} src={social.icon} alt={social.id}
          className={`w-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'mr-4' : 'mr-0'}`} />
        ))}
      </div>
      
    </div>
    
    {/* <div className="h-fit max-xs:h-[30vh] w-[100vw] bg-pink-300 mt-10">
    <div className={` w-[100%] h-[23px] bg-gray-900 mt-[0px]`}>
    </div>
    <div className={` w-[100%] h-[22px] bg-gray-900 mt-[1px]`}>
    </div>
    <div className={` w-[100%] h-[21px] bg-gray-900 mt-[2px]`}>
    </div>
    <div className={` w-[100%] h-[20px] bg-gray-900 mt-[3px]`}>
    </div>
    <div className={` w-[100%] h-[19px] bg-gray-900 mt-[4px]`}>
    </div>
    <div className={` w-[100%] h-[18px] bg-gray-900 mt-[5px]`}>
    </div>
    <div className={` w-[100%] h-[17px] bg-gray-900 mt-[6px]`}>
    </div>
    <div className={` w-[100%] h-[16px] bg-gray-900 mt-[7px]`}>
    </div>
    <div className={` w-[100%] h-[15px] bg-gray-900 mt-[8px]`}>
    </div>
    <div className={` w-[100%] h-[14px] bg-gray-900 mt-[9px]`}>
    </div>
    <div className={` w-[100%] h-[13px] bg-gray-900 mt-[10px] `}>
    </div>
    <div className={` w-[100%] h-[12px] bg-gray-900 mt-[11px]`}>
    </div>
    <div className={` w-[100%] h-[11px] bg-gray-900 mt-[12px]`}>
    </div>
    <div className={` w-[100%] h-[10px] bg-gray-900 mt-[13px]`}>
    </div>
    <div className={` w-[100%] h-[9px] bg-gray-900 mt-[14px]`}>
    </div>
    <div className={` w-[100%] h-[8px] bg-gray-900 mt-[15px]`}>
    </div>
    <div className={` w-[100%] h-[7px] bg-gray-900 mt-[16px]`}>
    </div>
    <div className={` w-[100%] h-[6px] bg-gray-900 mt-[17px]`}>
    </div>
    <div className={` w-[100%] h-[5px] bg-gray-900 mt-[18px]`}>
    </div>
    <div className={` w-[100%] h-[4px] bg-gray-900 mt-[19px]`}>
    </div>
    <div className={` w-[100%] h-[3px] bg-gray-900 mt-[20px]`}>
    </div>
    <div className={` w-[100%] h-[2px] bg-gray-900 mt-[21px]`}>
    </div>
    <div className={` w-[100%] h-[1px] bg-gray-900 mt-[22px]`}>
    </div>
    <div className={` w-[100%] h-[0px] bg-gray-900 mt-[23px]`}>
    </div>
    <div className={` w-[100%] h-[0px] bg-gray-900 mt-[100px] max-xs:mt-[80px]`}>
    </div>
    </div> */}
  </section>
)

export default Footer