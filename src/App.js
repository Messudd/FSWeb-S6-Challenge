import React, { useEffect, useState } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";

const App = () => {
  const [myState, setMyState] = useState({
    chars: [],
    movies: [],
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setLoading(true);
    setErrors(null);
    const getInitialChars = async () => {
      return axios.get("https://swapi.dev/api/people/");
    };
    const getInitialMovs = async () => {
      return axios.get("https://swapi.dev/api/films/");
    };
    Promise.all([getInitialChars(), getInitialMovs()])
      .then(([chars, movs]) => {
        setLoading(false);
        setErrors(null);
        setMyState({
          ...myState,
          chars: [...chars.data],
          movies: [...movs.data[0].results],
        });
      })
      .catch((err) => {
        console.log("Sunucu - hatası  : ", err);
        setErrors(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Chars : ", myState.chars);
    console.log("Movies : ", myState.movies);
  }, [myState]);

  return (
    <div className="App">
      {loading && <p>Loading ...</p>}
      {errors && <p>{errors}</p>}
      {!loading &&
        !errors &&
        myState.chars.length > 0 &&
        myState.movies.length > 0 && (
          <>
            <h1 className="Header">STAR WARS - WIT</h1>
            <div className="char-container">
              {myState.chars.map((char, index) => (
                  <Karakter
                    key={index}
                    char={char}
                    movies={myState.movies}
                  ></Karakter>
              ))}
            </div>
          </>
        )}
    </div>
  );
};

export default App;
