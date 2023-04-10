import React, {useState} from 'react'
import {url} from "../api"
/*import {useState} from 'react'*/

export function RegisterUser({token}){
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch(`${url}/users/register` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: event.target[0].value,
        password: event.target[1].value
      }
    })
    }).then(resp => resp.json())
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      alert(error)
    });
    setUsername('');
    setPassword('');
  }
  return(
    <form id="newUser" onSubmit={(event)=>handleSubmit(event)}>
      <input type="text" placeholder = "username" value={username}
      onChange={(event) => setUsername(event.target[0])}></input>
      <input type="password" placeholder = "password" value={password}
      onChange={(event) => setPassword(event.target[1])}></input>
        <button type='submit'>New User</button>
    </form>
  )
}

    
    /*const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        
      }
    try {
      const response = await fetch(
        'https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
          'Authorization': Bearer eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();
      // As written below you can log your result
      // to check what data came back from the above code.
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
    return <>

    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input type='text' name='username' value={username} onChange=
      {(e)=> setUsername(e.target.value)} />
      <label htmlFor='password'>Password:</label>
      <input type='password' name='password' value={password} onChange=
      {(event) => setPassword(event.target.value)} />
      <button type='submit'>Submit</button>
    </form>
    
    </>*/

  