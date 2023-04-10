import React, {useState}  from 'react'
import {url} from "../api"

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token , setToken] = useState('');
    async function loginUser(event){
      event.preventDefault();

      fetch(`${url}/users/login` ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: event.target[1].value
        }
      })
      },[]).then(resp => resp.json())
      .then(result => {
        if(result.error){
          console.log(error)
        } else {
          setToken(result.data.token);
          setUsername(username);
          setError('');
        }
        console.log(setToken);
      })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername('');
        setPassword('');
      }
return <>

<h1>Log In</h1>
<form onSubmit={handleSubmit}>
  <label htmlFor='username'>Username:</label>
  <input type='text' name='username' value={username} onChange=
  {(e)=> setUsername(e.target.value)} />
  <label htmlFor='password'>Password:</label>
  <input type='password' name='password' value={password} onChange=
  {(event) => setPassword(event.target[1])} />
  <button type='submit'>Submit</button>
</form>

</>

}