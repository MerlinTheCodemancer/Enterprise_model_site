'use client';

import Image from 'next/image';
import styles from '../styles/TreasureHuntSection.module.css';
import treasureImage1 from '../images/treasure1.png'; // Replace with One Piece themed images
import treasureImage2 from '../images/treasure2.jpg'; // Replace with One Piece themed images
import capivaraImage from '../images/capivara_pirate.jpg'; // Add a pirate capivara image

export default function TreasureHuntSection() {
    return (
        <section id="treasureHunt" className={styles.treasureSection}>
            <div className={styles.sectionHeader}>
                <h2>Treasure Hunt Adventures</h2>
                <div className={styles.decorativeLine}></div>
            </div>
            
            <div className={styles.treasureGrid}>
                <article className={styles.treasureCard}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={treasureImage1} 
                            alt="Treasure Map" 
                            width={400} 
                            height={250} 
                            className={styles.treasureImage} 
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h3>The Grand Line Expedition</h3>
                        <p>Join our crew as we navigate the treacherous waters of the Grand Line in search of the legendary One Piece treasure!</p>
                        <button className={styles.readMoreBtn}>Read More</button>
                    </div>
                </article>
                
                <article className={styles.treasureCard}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={capivaraImage} 
                            alt="Capivara Pirate" 
                            width={400} 
                            height={250} 
                            className={styles.treasureImage} 
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h3>Captain Capivara's Tale</h3>
                        <p>The legendary Captain Capivara shares stories of adventure, friendship, and the pursuit of dreams on the high seas.</p>
                        <button className={styles.readMoreBtn}>Read More</button>
                    </div>
                </article>
                
                <article className={styles.treasureCard}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={treasureImage2} 
                            alt="Pirate Ship" 
                            width={400} 
                            height={250} 
                            className={styles.treasureImage} 
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h3>New World Adventures</h3>
                        <p>Discover the mysteries of the New World as our crew faces powerful enemies and forges unexpected alliances.</p>
                        <button className={styles.readMoreBtn}>Read More</button>
                    </div>
                </article>
            </div>
        </section>
    );
}
