import { features } from "../constants";
import styles, {layout} from "../style";
import Button from "./Button";

const FeatureCard = ({ img, title, content, index}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1} ? "mb-6" : "mb-0"  feature-card`} >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    <img src={img} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 ">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You add your land,<br className="sm:block hidden"/> we'll handle the transaction. </h2>
      <p className={`${styles.paragraph} text-justify max-w-[500px] mt-5`}>
        Blockchain-based land ownership transfer would make it easier to track land ownership and prevent fraudulent activities such as double ownership. This can have a significant impact on improving land tenure security and enabling economic development in many parts of the world.
      </p>
        <Button styles="mt-10"/>
    </div>
    
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) =>(
        <FeatureCard key={feature.id} {... feature} index={index}/>
      ))}
    </div>
  </section>
)

export default Business