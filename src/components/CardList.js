import React from "react";
import Card from "./Card";

const CardList = ({ profiles }) => {
  return (
    <div>
      {profiles.length === 0 ? (
        <p>No profiles found. Try searching for a GitHub username.</p>
      ) : (
        profiles.map((profile) => <Card key={profile.id} profile={profile} />)
      )}
    </div>
  );
};

export default CardList;
