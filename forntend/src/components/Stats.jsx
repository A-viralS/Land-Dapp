import {stats} from "../constants"
import styles from "../style"

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row gap-5 flex-wrap justify-items-center sm:mb-20 sm:ml-10 mb-6`}>
    {stats.map((stat) => (
      <div className="text-white flex-1 flex justify items-center flex-row m-3 " key={stat.id} >
        <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">{stat.value}</h4>
        <p className="font-normal xs:text-[20px] text-[10px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats