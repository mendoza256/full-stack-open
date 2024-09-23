import StatisticLine from "./StatisticLine";

export const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = good * 1 + neutral * 0 + (bad * -1) / all;
  const positive = (good / all) * 100;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={all} />
        <StatisticLine text="Average" value={average.toFixed(2)} />
        <StatisticLine text="Positive" value={positive.toFixed(1) + "%"} />
      </tbody>
    </table>
  );
};

export default Statistics;
