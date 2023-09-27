import React from "react";
import Accordeon from "./Accordeon";

const Karakter = ({ char, movies }) => {
  return (
    <div className="char-card">
      <h2>{char.name}</h2> 
      {char.films.map((filmTitle,idx) => (
        <Accordeon title = {filmTitle}>
          <p>{movies.find((m) => m.title === filmTitle).opening_crawl}</p>
        </Accordeon>
      ))}
    </div>
  );
};

export default Karakter;
