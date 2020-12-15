import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Note({ id, title, content, deleteNote }) {
    function handleOnClick() {
        deleteNote(id);
    }

    return (
        <div className="note">
            <h4 className="note-title">{title}</h4>
            <p>{content}</p>
            <button onClick={handleOnClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}
