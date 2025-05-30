import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="social-media-icons">
          <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
        </div>
        <div className={styles.container}>
          <img src="/logo.png" alt="" />
          <h2>Gittes Glamping</h2>
        </div>
    </footer>
  );
};

export default Footer;
