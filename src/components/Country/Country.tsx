import { useState } from "react";
import type { CountryType } from "../../type";
import "./Country.css";

export interface CountryProps {
  country: CountryType;
  handleVisitedCountry: (country: CountryType) => void;
  handlerVisitedFlags: (flags: string) => void;
}

export default function Country({
  country,
  handleVisitedCountry,
  handlerVisitedFlags,
}: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
  };

  return (
    <div className={`country ${visited ? "visited-bg" : ""}`}>
      <h3>{country.name.official}</h3>
      <img src={country.flags.flags.png} alt="" />
      <h4>Capital: {country.capital.capital}</h4>
      <h4>Population: {country.population.population}</h4>
      <button
        onClick={handleVisited}
        className={`btn ${visited ? "visited-btn" : ""}`}
      >
        {visited ? "Visited" : "Mark as Visited"}
      </button>

      <button
        onClick={() => {
          handlerVisitedFlags(country.flags.flags.png);
        }}
      >
        Mark to add visited Flag
      </button>
    </div>
  );
}
