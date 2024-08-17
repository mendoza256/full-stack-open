import Part from "./Part";

const Content = (props) => (
  <div>
    <Part content={props.part} />
    <Part content={props.exercises} />
  </div>
);
export default Content;
