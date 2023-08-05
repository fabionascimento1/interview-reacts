"use client";
import { useState } from "react";

export default function SelectOptions() {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const countries = [
    {
      name: "United States",
      value: "us",
      cities: ["New York", "San Francisco"],
    },
    {
      name: "Brazil",
      value: "br",
      cities: ["Rio de Janeiro", "São Paulo"],
    },
    {
      name: "India",
      value: "in",
      cities: ["Delhi", "Mumbai", "Bangalore"],
    },
  ];
  return (
    <>
      <select>
        {countries.map((country) => (
          <optgroup key={country.value} label={country.name}>
            {country.cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>
      <select>
        {selectedCountry &&
          countries
            .find((country) => country.value === selectedCountry)
            .cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
      </select>
    </>
  );
}
