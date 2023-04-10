import React from "react"

export default function Content(props){
    return(
        <div key = {props.id}>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <h4>{props.price}</h4>
                    </div>
    )
}