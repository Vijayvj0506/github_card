import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import CardList from "./components/CardList";
import "./App.css";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profileData) => {
    setProfiles([...profiles, profileData]); // Add new profile to list
  };

  return (
    <div className="container">
      <h1>GitHub Card List</h1>
      <SearchForm onSearch={addProfile} />
      <CardList profiles={profiles} />
    </div>
  );
};

export default App;
