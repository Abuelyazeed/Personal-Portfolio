import styles from './Hero.module.css';
import heroImg from '../assets/hero-img.png';

function Hero() {
  return (
    <section id="hero">
      <div>
        <img src={heroImg} alt="Profile picture of Ahmed Abuelyazeed" />
      </div>
    </section>
  );
}

export default Hero;
