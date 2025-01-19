import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((wasEditing) => !wasEditing);
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input type="text" required value={name} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
