import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values({ good, bad, neutral }).reduce((a, b) => a + b, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Number(Math.round((good * 100) / countTotalFeedback()));
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onClick={onClick} />
      </Section>
      <Section title="Statistics">
        {good || bad || neutral ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification title="There is no feedback" />
        )}
      </Section>
    </>
  );
};
