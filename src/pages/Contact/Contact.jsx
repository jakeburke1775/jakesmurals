import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <h1>Get In Touch</h1>
        <p>
          Ready to transform your space with custom mural art? 
          Contact us today for a free consultation!
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <h3>📧 Email</h3>
            <a href="mailto:jakeburke1775@gmail.com">jakeburke1775@gmail.com</a>
          </div>
          <div className={styles.infoItem}>
            <h3>📱 Phone</h3>
            <a href="tel:6107372969">(610) 737-2969</a>
          </div>
        </div>
        <div className={styles.veteranNote}>
          <p>🇺🇸 Proud to be Veteran Owned & Operated</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;