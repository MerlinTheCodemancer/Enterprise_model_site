'use client';

import Image from 'next/image';
import styles from '../styles/NewsSection.module.css';
import newsImage1 from '../images/catarse.png';
import newsImage2 from '../images/cap_1.jpg';

export default function NewsSection() {
    return (
        <div className={styles.newsSection}>
            <h2>Latest News</h2>
            <article className={styles.newsArticle}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={newsImage1} 
                        alt="News Image 1" 
                        width={300} 
                        height={180} 
                        className={styles.newsImage} 
                    />
                </div>
                <div className={styles.contentWrapper}>
                    <h3>News Title - 20/10</h3>
                    <p>News content goes here...</p>
                </div>
            </article>
            <article className={styles.newsArticle}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={newsImage2} 
                        alt="News Image 2" 
                        width={300} 
                        height={180} 
                        className={styles.newsImage} 
                    />
                </div>
                <div className={styles.contentWrapper}>
                    <h3>Another News - 13/10</h3>
                    <p>More news content...</p>
                </div>
            </article>
            <article className={styles.newsArticle}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={newsImage2} 
                        alt="News Image 2" 
                        width={300} 
                        height={180} 
                        className={styles.newsImage} 
                    />
                </div>
                <div className={styles.contentWrapper}>
                    <h3>Another News - 12/10</h3>
                    <p>More news content...</p>
                </div>
            </article>
            <article className={styles.newsArticle}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={newsImage1} 
                        alt="News Image 1" 
                        width={300} 
                        height={180} 
                        className={styles.newsImage} 
                    />
                </div>
                <div className={styles.contentWrapper}>
                    <h3>News Title - 10/11</h3>
                    <p>News content goes here...</p>
                </div>
            </article>
        </div>
    );
}
