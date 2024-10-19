import Image from "next/image";
import Navbar from '../app/components/Navbar';
import Hero from '../app/components/Hero';
import ImageSlider from '../app/components/ImageSlider';
import NewsSection from '../app/components/NewsSection';
import ProjectSlider from '../app/components/ProjectSlider';
import TextSlideSection from '../app/components/TextSlideSection';
import Footer from '../app/components/Footer';

export default function Home() {
  return (
    <div>
            <Navbar />
            <Hero />
            <ImageSlider />
            <section id="content" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                <NewsSection />
                <ProjectSlider />
            </section>
            <TextSlideSection />
            <Footer />
        </div>
    );
}
