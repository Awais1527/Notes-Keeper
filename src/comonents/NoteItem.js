import React,{useContext} from "react";
import noteContext from '../context/notes/noteContext'

export default function NoteItem(props) {
  const {deleteNote} = useContext(noteContext)
  
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <p className="card-text">{props.note.description}</p>
          <span style={{ color: "green"}} > <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(props.note._id)}}></i> </span>
          <span style={{ color: "green"}} > <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{props.updateNote(props.note)}}></i></span>
        </div>
      </div>
    </div>
  );
}
