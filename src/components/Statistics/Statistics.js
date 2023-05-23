import PropTypes from 'prop-types';
import StatItem from './StatItem';
import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={css.stat}>
      {title && <h2 className={css.stat__title}>{title}</h2>}
      <ul className={css.stat__list}>
        {stats.map(item => (
          <StatItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
