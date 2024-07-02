import { useContext } from 'react';
import { ThemeContext } from '../common/ThemeContextProvider';
import checkMarkIconDark from '../assets/checkmark-dark.svg';
import checkMarkIconLight from '../assets/checkmark-light.svg';

function SkillList({ skill }) {
  const { theme } = useContext(ThemeContext);
  const checkMarkIcon =
    theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <span>
      <img src={checkMarkIcon} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
