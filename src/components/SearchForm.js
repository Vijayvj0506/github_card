import React, { useState } from "react";
import axios from "axios";

const SearchForm = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.trim()) return; // Prevent empty search

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      onSearch(response.data); // Pass the user data to parent
      setUsername(""); // Clear input field after search
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("User not found. Please enter a valid GitHub username.");
      } else {
        alert("An error occurred while fetching data. Please try again later.");
      }
      console.error("API Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
