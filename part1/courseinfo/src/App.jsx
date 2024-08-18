import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const totalExercises = course.parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0
  );

  return (
    <div>
      <Header headline={course.name} />
      <Content course={course} />
      <Total totalExercises={totalExercises} />
    </div>
  );
};

export default App;
