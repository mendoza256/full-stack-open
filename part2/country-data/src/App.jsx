import { useEffect, useState } from "react";
import { Search } from "./components/Search";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const req = axios.get(
      `https://studies.cs.helsinki.fi/restcountries/api/all`
    );
    req
      .then((res) => res.data)
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const filtered =
    search.length > 0
      ? countries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
      : countries;

  return (
    <>
      <h1>Countries</h1>
      <Search search={search} setSearch={setSearch} />
      <div>
        {Array.isArray(filtered) &&
          filtered?.map((result) => (
            <div key={result.cca2}>{result.name.common}</div>
          ))}
        {filtered.length === 1
          ? filtered?.map((result) => (
              <div key={result.cca2}>
                <p>{result.region}</p>
                <p>{result.capital[0]}</p>
                <p>{result.flag}</p>
                <li>
                  {Object.values(result.languages).map((lan) => (
                    <ul key={lan}>{lan}</ul>
                  ))}
                </li>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default App;
