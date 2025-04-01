import Image from "next/image";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import NewsSection from './components/NewsSection';
import ProjectSlider from './components/ProjectSlider';
import TextSlideSection from './components/TextSlideSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
            <Navbar />
            <Hero />
            <ImageSlider />
            <section id="content" style={{ display: 'flex', flexDirection: 'column', gap: '5%', padding: '1%' }}>
                <NewsSection />
                <ProjectSlider />
            </section>
            <TextSlideSection />
            <Footer />
        </div>
    );
}
