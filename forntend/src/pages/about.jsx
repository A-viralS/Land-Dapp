import styles from "../style";
import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Client, CTA, Footer, Header, Mission} from '../components';


const about = () => {



  return(
    <div className="bg-primary w-full overflow-hidden">
        
      <div className= {`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div>
          <Header />
      </div>

      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Mission />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default about