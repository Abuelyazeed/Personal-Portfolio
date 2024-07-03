import styles from './Projects.module.css';
import PmLogo from '../assets/logo.png';
import investmentCalcLogo from '../assets/investmentApp.png';
import todoAppLogo from '../assets/todoApp.png';
import weatherAppLogo from '../assets/weatherLogo.jpg';
import ProjectCard from '../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={PmLogo}
          link="https://project-manager-715.netlify.app/"
          h3="WealthBuilder"
          p="Project Management App."
        />
        <ProjectCard
          src={todoAppLogo}
          link="https://to-do-app-cb459.web.app/"
          h3="TaskMaster"
          p="To Do App."
        />
        <ProjectCard
          src={weatherAppLogo}
          link="https://weather-app-737e1.web.app/"
          h3="WeatherWise"
          p="Weather App."
        />
        <ProjectCard
          src={investmentCalcLogo}
          link="https://investment-calculator-715.netlify.app/"
          h3="WealthBuilder"
          p="Investment Calculator App."
        />
      </div>
    </section>
  );
}

export default Projects;
