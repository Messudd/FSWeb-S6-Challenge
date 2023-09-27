import React from "react";
import Accordeon from "./Accordeon";

const Karakter = ({ char, movies }) => {
  return (
    <Accordeon title={char.name}>
      <div className="char-card">
        <ul>
          <li>Heigt : {char.height}</li>
          <li>Mass : {char.mass}</li>
          <li>Hair Color : {char.hair_color}</li>
          <li>Skin Color : {char.skin_color}</li>
          <li>Eye Color : {char.eye_color}</li>
          <li>Birth Yaer : {char.birth_year}</li>
          <li>Gender : {char.gender}</li>
          <li>Appears In : {char.films.length} movies</li>
        </ul>
        {char.films.map((filmTitle, idx) => (
          <Accordeon title={filmTitle}>
            <ul>
              <li>{movies.find((m) => m.title === filmTitle).release_date}</li>
              <li>{movies.find((m) => m.title === filmTitle).opening_crawl}</li>
            </ul>
          </Accordeon>
        ))}
      </div>
    </Accordeon>
  );
};

export default Karakter;
