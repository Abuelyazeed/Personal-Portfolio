import styles from './Projects.module.css';
import viberr from '../assets/viberr.png';
import ProjectCard from '../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="section-title">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={viberr}
          link="https://to-do-app-cb459.web.app/"
          h3="To Do App"
          p="arr"
        />
      </div>
    </section>
  );
}

export default Projects;
