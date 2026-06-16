import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h1>About Jake's Murals</h1>
        <p>
          Jake's Murals specializes in creating stunning custom artwork 
          that transforms spaces and brings visions to life.
        </p>
        <p>
          We offer professional mural services for walls, windows, and 
          temporary chalk art installations.
        </p>
        <div className={styles.veteranSection}>
          <h2>🇺🇸 Veteran Owned & Operated</h2>
          <p>
            As a veteran-owned business, we bring the same dedication, 
            attention to detail, and commitment to excellence to every project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;