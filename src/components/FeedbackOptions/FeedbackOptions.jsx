import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ onClick }) =>  {
   
      return(
         <div className={s["button-box"]}>
            <button type="button" name="good" onClick={onClick} className={s["button"]}>
               Good
            </button>
            <button type="button" name="neutral" onClick={onClick} className={s["button"]}>
               Neutral
            </button>
            <button type="button" name="bad" onClick={onClick} className={s["button"]}>
               Bad
            </button>
         </div>
      )
   
}

FeedbackOptions.propTypes = {
   onClick: PropTypes.func.isRequired,
} 


