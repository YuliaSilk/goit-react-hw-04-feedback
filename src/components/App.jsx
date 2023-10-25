import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Statistic } from "./Statistic/Statistic";


export const App = ({ good, neutral, bad }) => {
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);


const countTotalFeedback = () => {
  return good + neutral + bad;
};

const positivePercentage = () => {
return good / countTotalFeedback();
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
        options= {Object.keys(state)} 
        onLeaveFeedback= {toLeaveFeedback}
      />
      </Section>
      {total > 0 ? (
     <Section title="Statistics">
        <Statistic
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        positivePercentage={positivePercentage}
        />
     </Section>
      ) : (
        <Notification message="There is no feedback"/>
      )}
      </div>
  );
}

