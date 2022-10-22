import PropTypes from 'prop-types';
import s from './Statistics.module.css'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   return(
      <ul className={s["stats-list"]}>
         <li className={s["stats-item"]}>Good: {good}</li>
         <li className={s["stats-item"]}>Neutral: {neutral}</li>
         <li className={s["stats-item"]}>Bad: {bad}</li>
         <li className={s["stats-item"]}>Total: {total}</li>
         <li className={s["stats-item"]}>Positive Feedback: {positivePercentage}%</li>
      </ul>
   )
}

Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   positivePercentage: PropTypes.number.isRequired,
} 

