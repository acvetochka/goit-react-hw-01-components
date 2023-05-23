import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function StatItem({ id, label, percentage }) {
  return (
    <li
      className={css.stat__item}
      style={{ backgroundColor: getRandomHexColor() }}
      key={id}
    >
      <span className={css.stat__label}>{label}</span>
      <span className={css.stat__percentage}>{percentage}%</span>
    </li>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;
