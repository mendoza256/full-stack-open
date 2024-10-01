import { Country } from "./Contry";

export const Countries = ({ filtered }) => {
  if (filtered?.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filtered?.length > 1) {
    return (
      <div>
        running
        {filtered?.map((country) => (
          <Country key={country.cca2} country={country} detail={false} />
        ))}
      </div>
    );
  } else if (filtered?.length === 1) {
    return <Country country={filtered[0]} detail={true} />;
  }
};
