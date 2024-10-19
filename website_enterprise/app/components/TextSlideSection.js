// components/TextSlideSection.js
import styles from '../styles/TextSlideSection.module.css';

export default function TextSlideSection() {
    return (
        <section className={styles.textSlideSection}>
            <div className={styles.textContent}>
                <h2>Our Mission</h2>
                <p>Transforming dreams into reality through innovative solutions.</p>
            </div>
        </section>
    );
}