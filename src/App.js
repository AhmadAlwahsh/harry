import React, { useState, useEffect } from "react";
import "./App.css";
import noImg from "./noImg.jpg";
import Fade from "react-reveal/Fade";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://hp-api.herokuapp.com/api/characters");
      const items = await api.json();
      setData(items);
    };

    fetchData();
  });

  return (
    <>
      <h1>Harry Potter</h1>
      <div className="bio">
        Informations about more than <span>{data.length}</span> character in
        Harry Potter film.
      </div>
      {data[0] ? (
        <div className="container">
          {data.map((obj) => {
            return (
              <Fade left>
                <div className="card">
                  <img src={obj.image || noImg} alt={obj.name} />
                  <h3>{obj.name}</h3>
                  <div>
                    Gender: <span>{obj.gender || "Unknown"}</span>
                  </div>
                  <div>
                    House: <span>{obj.house || "Unknown"}</span>
                  </div>
                  <div>
                    Year of birth: <span>{obj.yearOfBirth || "Unknown"}</span>
                  </div>
                  <div>
                    Ancestry: <span>{obj.ancestry || "Unknown"}</span>
                  </div>
                  <div>
                    Eye colour: <span>{obj.eyeColour || "Unknown"}</span>
                  </div>
                  <div>
                    Hair colour: <span>{obj.hairColour || "Unknown"}</span>
                  </div>
                  <div>
                    Actor: <span>{obj.actor || "Unknown"}</span>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      ) : (
        <div className="load">LOADING</div>
      )}
      <footer>
        <p>
          جميع الحقوق محفوظة ©
          <a href="https://ahmadalwahsh.netlify.app">
            <span>أحمد الوحش</span>
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
