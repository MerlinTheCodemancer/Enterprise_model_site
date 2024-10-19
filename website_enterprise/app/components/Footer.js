// components/Footer.js
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import logo from '../images/art-and-design.png';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerColumn}>
                <h3>Projects</h3>
                <ul>
                    <li><a href="#">Project 1</a></li>
                    <li><a href="#">Project 2</a></li>
                    <li><a href="#">Project 3</a></li>
                </ul>
            </div>
            <div className={styles.footerColumn}>
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
            <div className={styles.footerColumn}>
                <Image src={logo} alt="Logo" width={250} height={100}/>
            </div>
        </footer>
    );
}
