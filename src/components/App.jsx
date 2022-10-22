import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {

   state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

    onClick = (e) => {
      const {name} = e.target;
      this.setState ((prevState) => {
         return({
            [name]: Number(prevState[name] + 1)
         })
      })
    }

    countTotalFeedback = () => {
      return Object.values(this.state).reduce((a, b) => a + b, 0)
    }

    countPositiveFeedbackPercentage = () => {
      return Number(Math.round(this.state.good * 100 / this.countTotalFeedback()));
       

    }

  render(){
   const {good, neutral, bad} = this.state;
   console.log(this.state)
   const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
   const countTotalFeedback = this.countTotalFeedback()
   return (
      <>
      <Section title='Please leave feedback'>
        <FeedbackOptions
         onClick={this.onClick}
          />
      </Section>
      <Section title='Statistics'>
         {good || bad || neutral ? 
         ( <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
         total={countTotalFeedback}
         positivePercentage={countPositiveFeedbackPercentage}/>) 
         :
         (<Notification title="There is no feedback"/> ) 
          }
      
      </Section>
      </>
    );
  }
};
