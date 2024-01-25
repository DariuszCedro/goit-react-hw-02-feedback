import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <h2>Statistics</h2>
    <p className={css.option}>Good: {good}</p>
    <p className={css.option}>Neutral: {neutral}</p>
    <p className={css.option}>Bad: {bad}</p>
    <p className={css.option}>Total: {total}</p>
    <p className={css.option}>Positive feedback: {positivePercentage}%</p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
