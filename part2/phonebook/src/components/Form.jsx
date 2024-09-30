import Input from "./Input";
import PropTypes from "prop-types";

const Form = ({
  handleSubmit,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input label="Name: " value={newName} handler={handleNameChange} />
        <Input
          label="Number: "
          value={newNumber}
          handler={handleNumberChange}
        />
        <div>
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  newName: PropTypes.string.isRequired,
  newNumber: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
};

export default Form;
