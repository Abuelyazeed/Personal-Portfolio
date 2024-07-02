import styles from './Hero.module.css';
import heroImg from '../assets/hero-img.png';
import themeIcon from '../assets/sun.svg';
import linkedinIcon from '../assets/linkedin-light.svg';
import githubIcon from '../assets/github-light.svg';
import CV from '../assets/cv.pdf';

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Ahmed Abuelyazeed"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ahmed <br /> Abuelyazeed
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/ahmed-abuelyazeed-690393230/">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/Abuelyazeed">
            <img src={githubIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
