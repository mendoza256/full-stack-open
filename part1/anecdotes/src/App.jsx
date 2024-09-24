import { useState } from "react";
import Headline from "./components/Headline";
import { returnHighestValueIndex, returnRandomIndex } from "./lib/utils";
import Anecdote from "./components/Anecdote";
import Button from "./components/Button";
import anecdotes from "./data/anecdotes";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const currentHighestValueIndex = returnHighestValueIndex(votes);

  function handleRandomizeQuote() {
    const randomIndex = returnRandomIndex(anecdotes);
    setSelected(randomIndex);
  }

  function voteForAnecdote() {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  }

  return (
    <div>
      <Headline text="Anecdote of the day" />
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button handleClick={handleRandomizeQuote} text="Next anecdote" />
      <Button handleClick={voteForAnecdote} text="Vote" />
      <Headline text="Anecdote with most votes" />
      <Anecdote
        anecdotes={anecdotes}
        selected={currentHighestValueIndex}
        votes={votes}
      />
    </div>
  );
};

export default App;
