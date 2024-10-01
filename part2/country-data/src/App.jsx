import { useEffect, useState } from "react";
import { Search } from "./components/Search";
import axios from "axios";
import { Countries } from "./components/Countries";

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

  useEffect(() => {
    if (filtered.length > 10) {
      return;
    }
  });

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  console.log("filtered", filtered.length);
  console.log("search", search);

  return (
    <>
      <h1>Countries</h1>
      <Search search={search} setSearch={setSearch} />
      {filtered && <Countries filtered={filtered} />}
    </>
  );
}

export default App;
