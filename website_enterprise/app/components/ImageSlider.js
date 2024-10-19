// components/ImageSlider.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/ImageSlider.module.css';
import travel from '../images/one.jpg';
import ship from '../images/ships.jpg';
import chest from '../images/chest.gif'; // Exemplo de GIF local

export default function ImageSlider() {
    const images = [
        { src: chest, alt: 'Chest', isGif: true }, // Adicionei uma flag para identificar GIFs
        { src: ship, alt: 'Ship', isGif: false },
        { src: travel, alt: 'Travel', isGif: false }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Troca de imagem a cada 3 segundos
        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);

    return (
        <section className={styles.imageSlider}>
            <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="responsive"
                            width={800}
                            height={450}
                            unoptimized={image.isGif} // Desativa a otimização para GIFs
                        />
                    </div>
                ))}
            </div>
            <button className={styles.prevButton} onClick={prevSlide}>❮</button>
            <button className={styles.nextButton} onClick={nextSlide}>❯</button>
            <div className={styles.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
}
