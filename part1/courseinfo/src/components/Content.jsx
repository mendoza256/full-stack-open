import Part from "./Part";

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, i) => (
        <Part part={part.name} exercises={part.exercises} key={i} />
      ))}
    </div>
  );
};

export default Content;
