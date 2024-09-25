import { useState } from "react";
import { filterPersonsWithSearch } from "./lib/utils";
import Headline from "./components/Headline";
import Input from "./components/Input";
import Entries from "./components/Entries";
import Form from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0162-33212342" },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const filteredEntries =
    search === "" ? persons : filterPersonsWithSearch(persons, search);

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleNumberChange(e) {
    setNewNumber(e.target.value);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} has already been added to the phonebook`);
    } else {
      e.preventDefault();
      setPersons([...persons, { name: newName, number: newNumber }]);
    }
  }

  return (
    <div>
      <Headline type="h2" text="Phonebook" />
      <Headline type="h3" text="Search" />
      <Input
        label="Filter shown with"
        value={search}
        handler={handleSearchChange}
      />
      <Headline type="h3" text="Add a new" />
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Headline type="h2" text="Numbers" />
      <Entries entries={filteredEntries} />
    </div>
  );
};

export default App;
