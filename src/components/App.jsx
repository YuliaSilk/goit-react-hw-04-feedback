import React, { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Statistic } from "./Statistic/Statistic";


export const App = () => {
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);


const countTotalFeedback = () => {
  return good + neutral + bad;
};

const positivePercentage = () => {
  return countTotalFeedback() > 0 ? Math.round((good / countTotalFeedback()) * 100) :0;
};

const toLeaveFeedback = value => {
  if (value === 'good') {
   setGood(prevState => prevState + 1);
  }
  if (value === 'neutral') {
    setNeutral(prevState => prevState + 1);
  }
  if (value === 'bad') {
    setBad(prevState => prevState + 1);
  };
}

  return (
    <div>
    <Section tittle='Please leave feedback'>
      <FeedbackOptions 
        options= {['good', 'neutral', 'bad']} 
        onLeaveFeedback= {toLeaveFeedback}
      />
      </Section>
      {countTotalFeedback()> 0 ? (
     <Section title="Statistics">
        <Statistic
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={countTotalFeedback()} 
        positivePercentage={positivePercentage()}
        />
     </Section>
      ) : (
        <Notification message="There is no feedback"/>
      )}
      </div>
  );
}

