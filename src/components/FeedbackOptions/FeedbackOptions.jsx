import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.button_list}>
    <button
      type="button"
      className={css.button}
      name="good"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      type="button"
      className={css.button}
      name="neutral"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      type="button"
      className={css.button}
      name="bad"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
