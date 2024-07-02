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
      <div className={styles.skillList}>
        <SkillList skill="HTML" />
        <SkillList skill="CSS" />
        <SkillList skill="JavaScript" />
        <SkillList skill="TypeScript" />
        <SkillList skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
