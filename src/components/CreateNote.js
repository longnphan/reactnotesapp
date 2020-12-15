import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

export default function CreateNote({ addNote }) {
    const [inputText, setInputText] = useState({
        title: "",
        content: "",
    });

    function handleOnChange(event) {
        const { name, value } = event.target;
        setInputText(prevText => {
            return { ...prevText, [name]: value };
        });
    }

    function handleOnClick(event) {
        event.preventDefault();

        {
            /*Prevents users from adding notes without filling out form completely */
        }
        if (!inputText.title.length && !inputText.content.length) {
            return alert("Please add a title and content to your note");
        } else if (!inputText.title.length) {
            return alert("Please add a title to your note");
        } else if (!inputText.content.length) {
            return alert("Please add some content to your note");
        }

        addNote(inputText);
        setInputText({
            title: "",
            content: "",
        });
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    placeholder="Title..."
                    value={inputText.title}
                    onChange={handleOnChange}
                />
                <textarea
                    name="content"
                    placeholder="Note contents..."
                    rows="3"
                    value={inputText.content}
                    onChange={handleOnChange}
                />
                <button onClick={handleOnClick}>
                    <AddIcon />
                </button>
            </form>
        </div>
    );
}
