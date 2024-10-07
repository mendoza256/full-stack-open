const Entries = ({ entries, handleDeletePerson }) => {
  return (
    <>
      {" "}
      {entries.map((person) => (
        <div key={person.id}>
          <span>{person.name}</span> <span>{person.number}</span>
          <button onClick={() => handleDeletePerson(person.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};
export default Entries;
