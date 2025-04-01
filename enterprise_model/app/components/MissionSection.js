'use client';

import { useEffect, useRef } from 'react';
import styles from '../styles/MissionSection.module.css';

export default function MissionSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.missionSection}>
            <div className={styles.textContent}>
                <h2>Our Pirate Code</h2>
                <div className={styles.quote}>
                    <p>"In the vast ocean of technology, we sail with the spirit of adventure, 
                    the courage to innovate, and the determination to find the One Piece of perfect solutions."</p>
                    <span className={styles.author}>- Captain Capivara</span>
                </div>
                <div className={styles.values}>
                    <div className={styles.valueItem}>
                        <div className={styles.valueIcon}>⚓</div>
                        <h3>Adventure</h3>
                        <p>We embrace new challenges with excitement</p>
                    </div>
                    <div className={styles.valueItem}>
                        <div className={styles.valueIcon}>🏴‍☠️</div>
                        <h3>Freedom</h3>
                        <p>We think outside the box and break boundaries</p>
                    </div>
                    <div className={styles.valueItem}>
                        <div className={styles.valueIcon}>🧭</div>
                        <h3>Loyalty</h3>
                        <p>We stand by our crew through any storm</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
