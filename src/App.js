import React from 'react'
import Posts from "./Components/Posts"
import {Footer} from "./Components/Footer"
import {RegisterUser} from "./Components/Register"
import {Login} from "./Components/Login"
import {Postform} from "./Components/Form"
import {useState, useEffect} from 'react'
/*import {PostForm} from "./Components/Form"
import allPost from "./source/api"*/

export default function App() {
  const [posts, setPosts] = useState([]);
  console.log("post:", posts)

  useEffect (() => {
    const fetchPost = async () => {
      const resp = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/posts');
      const data = await resp.json();
      setPosts(data.data.posts)
      console.log("data", data.data.posts)
       
    }
    fetchPost();
  }, []) 
 

  /*return <>
  <h1>
    <Posts/> 
  </h1>
 
      

   
  
  </>/*
  /*const postData = posts.map(post => {
    return ( <Posts
    key = {post.posts.data._id}
    title = {post.posts.data.title}
    desc = {post.posts.data.description}
    price = {post.posts.data.price}
    deliver = {post.post.data.willDeliver}
    
    /> )
    
  }

    )*/
  return <>
<div className="container">
    <h1>Header</h1>
      <div><RegisterUser/></div>
        <Login/>
    <div className="row">
    <div className="col">
    <aside><Postform posts={posts} setPosts={setPosts}/></aside>
    <main> <Posts posts={posts}/> </main>
    </div>
    </div>
  <footer>
    <h1><Footer/></h1>
  </footer>
</div>
    
</> 
}
/* posts.map(post => <div key = {post.id}>
      <h4>{post.title}</h4>
      <p>{post.description}</p>
      <h4>{post.price}</h4>
      </div>) */