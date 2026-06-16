import styles from './Home.module.css';
// Import logo - add your logo file to src/assets/
// import logo from '../../assets/jakes-murals-logo.png';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Logo Section */}
      <section className={styles.logoSection}>
        <div className={styles.logoContainer}>
          {/* Replace with your actual logo */}
          <div className={styles.logoPlaceholder}>
            <h1>Jake's Murals</h1>
          </div>
          {/* Uncomment when you add your logo: */}
          {/* <img src={logo} alt="Jake's Murals" className={styles.logo} /> */}
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>Walls</h3>
            <p>Custom mural artwork for interior and exterior walls</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Windows</h3>
            <p>Eye-catching window displays and storefront art</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Chalk Murals</h3>
            <p>Temporary chalk art for events and special occasions</p>
          </div>
        </div>
      </section>

      {/* Veteran Owned Badge */}
      <section className={styles.veteranBadge}>
        <p>🇺🇸 Veteran Owned & Operated</p>
      </section>
    </div>
  );
};

export default Home;