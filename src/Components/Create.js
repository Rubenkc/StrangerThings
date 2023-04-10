import React, { useState } from 'react';


export const Create = () => {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);
    
    const handleSubmit = async(ev) => {
        ev.preventDefault();
    }

    return <>
        <h3>
            Create a Post
        </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange=
            {(ev) => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="title" value={body} onChange=
            {(ev) => setBody(ev.target.value)}></input>
            <button type="submit" className = "btn">Submit</button>
        </form>
    </>
}
