export function personIsInSearch(person, search) {
    return person.name.toLowerCase().includes(search.toLowerCase())
}

export function filterPersonsWithSearch(persons, search) {
    return persons.filter((person) => personIsInSearch(person, search));
}