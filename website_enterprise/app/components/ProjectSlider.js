// components/ProjectSlider.js
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectSlider.module.css';
import projectImage1 from '../images/bakuman.jpg';
import projectImage2 from '../images/dnd.jpg';
import projectImage3 from '../images/op_rpg.jpg';

export default function ProjectSlider() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className={styles.projectsSliderColumn}>
            <h2>Our Projects</h2>
            <div className={styles.sliderContainer} ref={sliderRef}>
                <article className={styles.projectArticle}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={projectImage1} 
                            alt="Project 1 Image" 
                            width={150} 
                            height={100} 
                            className={styles.projectImage} 
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h1>All for Piece</h1>
                        <p>Um manga interessante</p>
                    </div>
                </article>
                <article className={styles.projectArticle}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={projectImage2} 
                            alt="Project 2 Image" 
                            width={150} 
                            height={100} 
                            className={styles.projectImage} 
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h1>Project 2</h1>
                        <p>Descrição do Projeto 2</p>
                    </div>
                </article>
                <article className={styles.projectArticle}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={projectImage3} 
                            alt="Project 3 Image" 
                            width={150} 
                            height={100} 
                            className={styles.projectImage} 
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h1>Project 3</h1>
                        <p>Descrição do Projeto 3</p>
                    </div>
                </article>
                <article className={styles.projectArticle}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={projectImage3} 
                            alt="Project 3 Image" 
                            width={150} 
                            height={100} 
                            className={styles.projectImage} 
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h1>Project 3</h1>
                        <p>Descrição do Projeto 3</p>
                    </div>
                </article>
                <article className={styles.projectArticle}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={projectImage1} 
                            alt="Project 1 Image" 
                            width={150} 
                            height={100} 
                            className={styles.projectImage} 
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h1>All for Piece</h1>
                        <p>Um manga interessante</p>
                    </div>
                </article>
                <article className={styles.projectArticle}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={projectImage2} 
                            alt="Project 2 Image" 
                            width={150} 
                            height={100} 
                            className={styles.projectImage} 
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h1>Project 2</h1>
                        <p>Descrição do Projeto 2</p>
                    </div>
                </article>
            </div>

            {/* Botões de controle do slider */}
            <div className={styles.sliderControls}>
                <button className={styles.sliderButton} onClick={scrollLeft}>Left</button>
                <button className={styles.sliderButton} onClick={scrollRight}>Right</button>
            </div>
        </div>
    );
}
