import { useEffect, useState } from "react";
import { filterPersonsWithSearch } from "./lib/utils";
import Headline from "./components/Headline";
import Input from "./components/Input";
import Entries from "./components/Entries";
import Form from "./components/Form";
import entriesService from "./services/entriesService";
import { Message } from "./components/Message";
import "./styles.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [important, setImportant] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    entriesService.getAll().then((initialPersons) => {
      setNotes(initialPersons);
    });
  }, []);

  const filteredEntries =
    search === "" ? notes : filterPersonsWithSearch(notes, search);

  function handleNameChange(e) {
    setNewNote(e.target.value);
  }

  function handleNumberChange(e) {
    setImportant(e.target.value);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function showMessage(type, text) {
    setMessage({ type, text });
    setTimeout(() => {
      setMessage({ type: "", text: "" });
    }, 2000);
  }

  function addEntry() {
    entriesService
      .create({ note: newNote, important: important })
      .then((data) => {
        setNotes(notes.concat(data));
        showMessage("success", `Added ${newNote}`);
      })
      .catch((error) => {
        alert(`Error creating '${newNote}': ${error}`);
        setNotes(notes.filter((note) => note.name !== newNote));
      });
  }

  function updateEntry(id, updatedPerson) {
    console.log(id, updatedPerson);
    entriesService
      .update(id, updatedPerson)
      .then((data) => {
        const updatedPersons = notes.map((note) =>
          note.id !== id ? note : data
        );
        setNotes(updatedPersons);
        showMessage("success", `Updated ${newNote}`);
      })
      .catch((error) => {
        showMessage(
          "error",
          `Information of note has already been removed from server`
        );
        console.log(error);
        setNotes(notes.filter((note) => note.name !== newNote));
      });
  }

  function handleSubmit(e) {
    const confirmMessage = `$Note is already added to the notebook, replace the new one?`;
    const note = notes.find((note) => note.name === newNote);
    if (!note) {
      e.preventDefault();
      addEntry();
      setNewNote("");
      setImportant("");
      return;
    } else if (window.confirm(confirmMessage)) {
      e.preventDefault();
      updateEntry(note.id, { name: newNote, important: important });
      setNewNote("");
      setImportant("");
    }
  }

  function handleDeletePerson(id) {
    const note = notes.find((note) => note.id === id);
    if (window.confirm(`Do you really want to delete ${note.name}?`)) {
      entriesService
        .deleteById(id)
        .then(() => {
          setNotes(notes.filter((note) => note.id !== id));
        })
        .catch((error) => {
          if (error.status === 404) {
            showMessage(
              "error",
              `Information of ${note.name} has already been removed from server`
            );
          }
          setNotes(notes.filter((note) => note.id !== id));
        });
    }
  }

  return (
    <div>
      <Headline type="h2" text="Phonebook" />
      <Message message={message} />
      <Headline type="h3" text="Search" />
      <Input
        label="Filter shown with"
        value={search}
        handler={handleSearchChange}
      />
      <Headline type="h3" text="Add a new" />
      <Form
        handleSubmit={handleSubmit}
        newNote={newNote}
        important={important}
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
