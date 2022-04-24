import React, { createContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea"; 

function createNote(note) {
    return <Note key={note.key} content={note.content} title={note.title}/>
}

function App() {
    const [notes, updateNotes] = useState([]);
    
    function addNote({title, content}) {
        updateNotes((preNotes) => [...preNotes, {title, content}]);
        console.log(notes);
    }

    function deleteNote(index) {
        console.log("delete note")
        updateNotes((preNotes) => 
            preNotes.filter(
                (note, i) => {
                    return i !== index  
                }
            )
        );
    }

    return (
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
            {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>) }    
        
        <Footer />
      </div>
    );
  }
export default App;