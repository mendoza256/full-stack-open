import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";
import Headline from "./components/Headline";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Headline text="Give feedback" />
      <Button setFeedback={setGood}>Good</Button>
      <Button setFeedback={setNeutral}>Neutral</Button>
      <Button setFeedback={setBad}>Bad</Button>
      <Headline text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
