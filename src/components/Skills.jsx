import { useContext } from 'react';
import styles from './Skills.module.css';
import { ThemeContext } from '../common/ThemeContextProvider';
import checkMarkIconDark from '../assets/checkmark-dark.svg';
import checkMarkIconLight from '../assets/checkmark-light.svg';
import SkillList from '../common/SkillList';

function Skills() {
  const { theme } = useContext(ThemeContext);
  const checkMarkIcon =
    theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h3 className={styles.categoryTitle}>Frontend Development</h3>
      <div className={styles.skillList}>
        <SkillList skill="HTML/CSS" />
        <SkillList skill="SASS" />
        <SkillList skill="Tailwind CSS" />
        <SkillList skill="Bootstrap" />
        <SkillList skill="JavaScript" />
        <SkillList skill="React" />
      </div>
      <hr />
      <h3 className={styles.categoryTitle}>Backend Development</h3>
      <div className={styles.skillList}>
        <SkillList skill="Node/ExpressJS" />
        <SkillList skill="Python/Django" />
        <SkillList skill="Java" />
        <SkillList skill="SQL" />
      </div>
      <hr />
      <h3 className={styles.categoryTitle}>Additional Skills and Expertise</h3>
      <div className={styles.skillList}>
        <SkillList skill="Git/GitHub" />
        <SkillList skill="Responsive Design" />
        <SkillList skill="SEO" />
        <SkillList skill="Agile Methodology" />
        <SkillList skill="Accessibility" />
      </div>
    </section>
  );
}

export default Skills;
