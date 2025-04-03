import React from "react";
import "./Card.css";

const Card = ({ profile }) => {
  return (
    <div className="card">
      <img src={profile.avatar_url} alt={profile.login} className="avatar" />
      <div className="card-info">
        <h2>{profile.name || profile.login}</h2>
        <p>{profile.bio || "No bio available"}</p>
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Card;
