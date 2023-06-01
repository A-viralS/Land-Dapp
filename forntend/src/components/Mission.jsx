import {stats} from "../constants"
import styles from "../style";

const Mission = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      <div className="text-white flex-1 flex justify flex-col m-3" >
        <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] mt-10">Mission</h4>
        <p className={`${styles.paragraph} text-justify mt-5`}>
          At the Land Registration System, we are dedicated to transforming the conventional approach to land registration and ownership management. Our primary objective is to bring about a fundamental shift in the way land transactions are conducted. We aim to achieve this by offering a cutting-edge platform that is characterized by its simplicity, transparency, and efficiency.<br/><br/>
          We understand that the process of dealing with land-related matters can often be intricate and time-consuming. Therefore, our mission is to streamline and simplify this process for all parties involved. By leveraging advanced technologies and innovative solutions, we strive to remove the complexities that have traditionally been associated with land transactions. Our platform is designed to provide a user-friendly experience, ensuring that property owners, buyers, and government authorities can navigate the system with ease.<br/><br/>
          Empowerment lies at the core of our mission. We believe in empowering individuals and institutions with the necessary tools and services to facilitate secure and accurate land transactions. Through our platform, property owners gain greater control and visibility over their land records, enabling them to manage their properties efficiently. Buyers can confidently navigate the market, backed by reliable information and a secure transaction process. Additionally, government authorities benefit from enhanced data management capabilities, ensuring the integrity of land records and facilitating effective governance.<br/><br/>
          Ultimately, our mission is to revolutionize land registration and ownership management by providing a transformative platform that empowers stakeholders and promotes a seamless and transparent land transaction experience. We are committed to driving positive change in the real estate industry and contributing to the development of thriving communities.
        </p>
      </div>
  </section>
)

export default Mission