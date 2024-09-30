<<<<<<< Updated upstream
const Entries = ({ entries }) => {
=======
import PropTypes from "prop-types";

const Entries = ({ entries, handleDeletePerson }) => {
>>>>>>> Stashed changes
  return (
    <>
      {" "}
      {entries.map((person) => (
        <div key={person.id}>
          <span>{person.name}</span> <span>{person.number}</span>
<<<<<<< Updated upstream
=======
          <button onClick={(e) => handleDeletePerson(e, person.id)}>
            Delete
          </button>
>>>>>>> Stashed changes
        </div>
      ))}
    </>
  );
};

Entries.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeletePerson: PropTypes.func.isRequired,
};

export default Entries;
