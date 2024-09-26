export function personIsInSearch(person, search) {
  return person.name.toLowerCase().includes(search.toLowerCase());
}

export function filterPersonsWithSearch(persons, search) {
  if (persons.length > 0) {
    return persons.filter((person) => personIsInSearch(person, search));
  }
}
