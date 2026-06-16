import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} Jake's Murals. All rights reserved.</p>
        <p>Veteran Owned & Operated 🇺🇸</p>
      </div>
    </footer>
  );
};

export default Footer;