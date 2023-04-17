import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  const getSumOfFeedbacks = () => {
    return good + neutral + bad;
  };
  const sumOfFeedbacks = getSumOfFeedbacks();

  const getPositiveFeedbackPercentage = () => {
    if (sumOfFeedbacks === 0) {
      return 0;
    }

    return ((good / sumOfFeedbacks) * 100).toFixed();
  };

  const positiveFeedbackPercentage = getPositiveFeedbackPercentage();
  let sectionContent;
  if (sumOfFeedbacks === 0) {
    sectionContent = <Notification></Notification>;
  } else {
    sectionContent = (
      <Statistics
        bad = {bad}
        good = {good}
        neutral = {neutral}
        total = {sumOfFeedbacks}
        positivePercentage = {positiveFeedbackPercentage}>
      </Statistics>
    )
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{
            good: handleGoodClick,
            neutral: handleNeutralClick,
            bad: handleBadClick,
          }}
        />
      </Section>
      <Section title="Statistics">
        {sectionContent}
      </Section>
    </>
  )

};
