'use client';

// components/Navbar.js
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarToggle} onClick={toggleNavbar}>
                ☰
            </div>
            <div className={`${styles.navbarLinks} ${isOpen ? styles.open : ''}`}>
                <a href="#hero">Home</a>
                <a href="#news">Treasure Hunt</a>
                <a href="#projects">Our Crew</a>
                <a href="#contact">Contact Us</a>
            </div>
        </nav>
    );
}
