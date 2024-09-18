import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function Addnote() {
  const { addNote } = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" })
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-3">
        <h2 style={{ textAlign: "center", margin: "100px 0px 0px" }}> Add a Note</h2>
      </div>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={4} required value={note.title} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onChange} minLength={5} required value={note.description} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label"> Tag</label>
            <input type="text" className="form-control" id="tag" onChange={onChange} name="tag" minLength={4} required value={note.tag} />
          </div>

          <button type="submit" className="btn btn-outline-success" onClick={handleClick} disabled={note.title.length < 4 || note.description.length < 5}> Add Note</button>
        </form>
      </div>
    </>
  );
}
