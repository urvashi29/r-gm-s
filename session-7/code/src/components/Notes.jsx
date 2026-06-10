import React, { useState } from "react";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const addNote = () => {
    //restructuring
    const note = {
      title,
    };

    setNotes((prev) => [...prev, note]);
    setTitle("");
    console.log(notes);
  };

  return (
    <div>
      <p>Notes</p>
      <input
        value={title}
        placeholder="Enter Notes Title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>

      <p>
        {notes.map((note) => {
          return <p>{note.title}</p>;
        })}
      </p>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Notes;
