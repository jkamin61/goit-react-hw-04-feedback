import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <ul className={"statistics__list"}>
      <li className={"statistics__item"}>Good: {good}</li>
      <li className={"statistics__item"}>Neutral: {neutral}</li>
      <li className={"statistics__item"}>Bad: {bad}</li>
      <li className={"statistics__item"}>Total: {total}</li>
      <li className={"statistics__item"}>Positive feedback: {positivePercentage}%</li>
    </ul>
  </>
);
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
}
