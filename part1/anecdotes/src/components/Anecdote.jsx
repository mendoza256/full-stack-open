const Anecdote = ({ anecdotes, selected, votes }) => {
  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </>
  );
};

export default Anecdote;
