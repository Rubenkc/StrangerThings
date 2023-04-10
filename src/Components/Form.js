import React, {useState}  from 'react'


export const Postform = ({posts, setPosts}) => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const handleSubmit = async(ev) => {
        ev.preventDefault();
        const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/posts',{
            method : 'POST',
            headers : {
                'Content-type':'Application/json',
                
            },
            body : JSON.stringify({
                title,
                description,
                price,


            }

            )
        });
        const data = await response.json();
            console.log('fakedata:', data)
            setPosts([data, ...posts])
            setPrice('');
            setTitle('');
            setDescription('');
    }

    return <>
        <h3>
            Create a Post
        </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange=
            {(ev) => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="description" value={description} onChange=
            {(ev) => setDescription(ev.target.value)}></input>
            <input type="text" placeholder="price" value={price} onChange=
            {(ev) => setPrice(ev.target.value)}></input>
            <button type="submit" className = "btn">Submit</button>
        </form>
    </>
}


