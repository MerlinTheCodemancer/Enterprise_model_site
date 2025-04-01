'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import logoImage from '../images/straw-hat-pirates.png'; // Add a One Piece themed logo with capivara

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navbarContainer}>
                <div className={styles.logoContainer}>
                    <Image src={logoImage} alt="Capivara Crew Logo" width={50} height={50} />
                    <span className={styles.logoText}>Capivara Crew</span>
                </div>
                
                <div className={styles.navbarToggle} onClick={toggleNavbar}>
                    {isOpen ? '✕' : '☰'}
                </div>
                
                <div className={`${styles.navbarLinks} ${isOpen ? styles.open : ''}`}>
                    <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#treasureHunt" onClick={() => setIsOpen(false)}>Treasure Hunt</a>
                    <a href="#crew" onClick={() => setIsOpen(false)}>Our Crew</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
                </div>
            </div>
        </nav>
    );
}

