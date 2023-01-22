import styles from "./style";

import { Navbar,Hero,Stats,Business,Billing,CardDeal,Testimonials,Client,CTA,Footers } from './components';


const App = () => (
  <div className ="bg-primary w-full overflow-hidden">
    <div className ={`${styles.paddingX} ${styles.flexCenter}
    `}>
       <div className = {`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
      
    <div classname ={`bg-primary ${styles.paddingX} ${styles.
      flexStart}`}>
      <div classname = {`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Client />
        <CTA />
        <Footers />
      </div>
    </div>
  </div>
);

export default App;