import Input from "./Input";

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

export default Form;
