import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Notes from "./Notes";

function App() {
    const [noteList, setNoteList] = useState([]);

    function addNote(note) {
        setNoteList(prevList => [...prevList, note]);
    }

    function deleteNote(id) {
        setNoteList(prevList => prevList.filter((note, index) => index !== id));
    }

    return (
        <div className="container">
            <Header />
            <CreateNote addNote={addNote} />
            {noteList.map((notes, index) => (
                <Notes
                    key={index}
                    id={index}
                    title={notes.title}
                    content={notes.content}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    );
}

export default App;
