import { use, useState } from "react";
import type { CountryType } from "../../type";
import Country from "../Country/Country";
import "./Countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const counrteis = use(countriesPromise);

  // to count visited countries
  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);
  // state to count visited flags
  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);

  // handler to count visited countries
  const handleVisitedCountry = (country: CountryType): void => {
    if (visitedCountries.includes(country)) {
      return;
    } else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };
  
  // handler to count visited flags
  const handlerVisitedFlags = (flags: string): void => {
    if (visitedFlags.includes(flags)) {
      return;
    } else {
      const newVisitedFlags = [...visitedFlags, flags];
      setVisitedFlags(newVisitedFlags);
    }
  };

  return (
    <div>
      <h2>Countries: {counrteis.length}</h2>
      <h2>Visited Flags: {visitedFlags.length}</h2>

      <h4>Visited Country: {visitedCountries.length}</h4>
      <div className="countries">
        {counrteis.map((currentCountry) => (
          <Country
            key={currentCountry.ccn3.ccn3}
            country={currentCountry}
            handleVisitedCountry={handleVisitedCountry}
            handlerVisitedFlags={handlerVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
}
