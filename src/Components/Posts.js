import React  from 'react'


export default function Posts({posts}){
   /* const [posts, setPosts] = useState([]);
  console.log("post:", posts)

  useEffect (() => {
    const fetchPost = async () => {
      const resp = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/posts');
      const dataOne = await resp.json();
      setPosts(dataOne.data.posts)
      console.log("data", dataOne.data)
       
    }
    fetchPost();
  }, []) */
    return <>
    
    <h1>
      Posts  
    </h1>
    {posts.map(post => 
    <div key = {post._id}>
        <h2>{post.title}</h2>
        <div>{post.description}</div>
        <div>{post.price}</div>
        <div>{post.willDeliver}</div>
    </div>)

}
    </>
}



/*export default function Posts(){
    
}
        return prop.map(propData => {
            return(
                <div>{prop.postData.title}</div>
            )  
        })

    return (
        <div>
            {props.key}
            <div>{props.title}</div>
            <div>{props.desc}</div>
            <div>{props.price}</div>
            <div>{props.deliver}</div>
        </div>
    )
} 
}*/
/*export const Posts = ({post}) => {

    return post.map(postData => {
        return(
            <div>{postData.title}</div>
        )  
    }) 
}
   /* {posts.map(post => {
        return (
        <div key = {post._id}>
            <h2>{post.title}</h2>
            <div>{post.description}</div>
            <div>{post.price}</div>
            <div>{post.willDeliver}</div>
        </div>
        )
    })} */
    



        
        
        
