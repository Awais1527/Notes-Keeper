import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from 'react-router-dom'

export default function Notes() {

  const { notes, getNotes, editNote } = useContext(noteContext);
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({ eid: '', etitle: "", edescription: "", etag: "" });
  let navigate = useNavigate();











  useEffect(() => {
    
    if(localStorage.getItem('token')){
    getNotes();
    }else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    editNote(note.eid, note.etitle, note.edescription, note.etag)
    refClose.current.click()
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({ eid: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }


  return (
    <>
      <>
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>Launch demo modal</button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel" >Edit Note</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input value={note.etitle} type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} minLength={4} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input value={note.edescription} type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} minLength={5} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input value={note.etag} type="text" className="form-control" id="etag" onChange={onChange} name="etag" minLength={4} required />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Close</button>
                <button disabled={note.etitle.length < 4 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Save Note</button>
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="container">
        <div className="row my-3">
          <h2>Your Notes</h2>
          {notes.length === 0 && "No notes to display"}
          {notes.map((note) => {
            return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
          })}
        </div>
      </div>
    </>
  );
}
