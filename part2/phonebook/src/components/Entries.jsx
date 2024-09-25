const Entries = ({ entries }) => {
  return (
    <>
      {" "}
      {entries.map((person) => (
        <div key={person.name}>
          <span>{person.name}</span> <span>{person.number}</span>
        </div>
      ))}
    </>
  );
};

export default Entries;
