import { useEffect, useState } from "react";
import { filterPersonsWithSearch } from "./lib/utils";
import Headline from "./components/Headline";
import Input from "./components/Input";
import Entries from "./components/Entries";
import Form from "./components/Form";
import entriesService from "./services/entriesService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    entriesService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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
      console.log("handlesubmit");

      entriesService
        .create({ name: newName, number: newNumber })
        .then((data) => {
          console.log(data);
          setPersons(persons.concat(data));
        })
        .catch((error) => {
          alert(`Error creating '${newName}': ${error}`);
          setPersons(persons.filter((n) => n.id !== id));
        });

      setNewName("");
      setNewNumber("");
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
