import styles from "../style"
import {discount, robot, blockchain} from '../assets';
import {Navbar, Footer } from '../components';

const Nopage = () =>(
    <div className="bg-primary w-full overflow-hidden">
        <div className= {`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar />
            </div>
        </div> 
        {/* ${styles.paddingY} */}
        <section id='home' className={`flex md:flex-row flex-col `}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text[72px] text-[70px] text-white ss:leading-[100px] leading-[75px]">
                Looks like<br  className='sm:block hidden'/>{" "}
                <span className=' text-[70px] text-gradient'> Error 404 Occurred,</span>{" "}
                </h1>
            </div>
            <h1 className=" font-poppins font-semibold ss:text[68px] text-[70px] text-white ss:leading-[100px] leading-[75px] w-full">
            Page Does Not Exist.
            </h1>
        </div>
        
        <div className={`flex-1 flex  ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={blockchain} alt="Robot Hand Image" className="w-[100%] h-[100%] relative z-[5]"/>

            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
            <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient'></div>
            <div className='absolute z-[0] w-[50%] h-[50%] right-40 bottom-40 blue__gradient'></div>
        </div>
        </section>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>

    </div>
)

export default Nopage