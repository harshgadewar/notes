import { useState,useEffect } from "react"
import axios from "axios";

export default function Notes(){

    const [notes,setNotes]=useState([]);

    useEffect(()=>{
        axios.get("https://localhost:8080/NotesData").then((res)=>{
            console.log(res.data);
            setNotes(res.data)
        })
    },[]);
    return(
             
        <div>
        <h1 className="mt-5 pt-5" style={{textAlign:"center"}}>NOTES</h1>
       <div className="container mt-5">
        <div className="row">
            <div className="col-12" style={{textAlign:"center"}}>
        {console.log(notes)}
                <ol>
                    {/* {notes.map((item , index)(
                    <li> <h2>{item.title}</h2></li>
                    <li> <p>desciption</p> </li>
))} */}
    {notes.map((note, index) => (
                <li key={index}>
                  <h2>{note.title}</h2>
                  <p>{note.description}</p>
                </li>
              ))}
                </ol>

                   
            </div>
        </div>
       </div>
       </div>
    )
}