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

  function addEntry() {
    entriesService
      .create({ name: newName, number: newNumber })
      .then((data) => {
        setPersons(persons.concat(data));
      })
      .catch((error) => {
        alert(`Error creating '${newName}': ${error}`);
        setPersons(persons.filter((person) => person.name !== newName));
      });
  }

  function updateEntry(id, updatedPerson) {
    console.log(id, updatedPerson);
    entriesService
      .update(id, updatedPerson)
      .then((data) => {
        const updatedPersons = persons.map((person) =>
          person.id !== id ? person : data
        );
        setPersons(updatedPersons);
      })
      .catch((error) => {
        alert(`Error updating ${newName}`);
        console.log(error);
      });
  }

  function handleSubmit(e) {
    const confirmMessage = `${newName} is already added to the phonebook, replace the old number with a new one?`;
    const person = persons.find((person) => person.name === newName);
    if (!person) {
      e.preventDefault();
      addEntry();

      setNewName("");
      setNewNumber("");
      return;
    } else if (window.confirm(confirmMessage)) {
      e.preventDefault();
      updateEntry(person.id, { name: newName, number: newNumber });

      setNewName("");
      setNewNumber("");
    }
  }

  function handleDeletePerson(id) {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
      entriesService.deleteById(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
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
      <Entries
        entries={filteredEntries}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
