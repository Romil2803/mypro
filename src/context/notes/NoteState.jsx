import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
  const host = "http://localhost:5000"
    const notesInitial =[
        
      ]
       const[notes , setNotes ] = useState(notesInitial);

        //Get All notes
        const getNotes = async ()=>{
          console.log("Adding a Note");
          //TODO : API call
          //API Call
          const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdkOTUwMzEyYjI5YzRlYTFmZWM1MDM4In0sImlhdCI6MTc0MjM2NDMzNn0.v9nwc19kNUF8SYDu6_VpVL7H31TJBXYMZbfo6C06NR0"
            }
           
          });
         const json = await response.json();
         console.log(json);
          setNotes(json)
        }
  

       //add notes
      const addNote = async (title,description,tag)=>{
        console.log("Adding a Note");
        //TODO : API call
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdkOTUwMzEyYjI5YzRlYTFmZWM1MDM4In0sImlhdCI6MTc0MjM2NDMzNn0.v9nwc19kNUF8SYDu6_VpVL7H31TJBXYMZbfo6C06NR0"
          },
           
          body: JSON.stringify({title,description,tag})
         
        });
        const json = await response.json();
        console.log(json);
        console.log("adding note");
        const note= {
          "_id": "67dbab45rf3899a0fl7725072e",
          "user": "67d950312b29c4ea1fec5038",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2025-03-20T05:44:37.769Z",
          "__v": 0
        }
        setNotes(notes.concat(note))

      }

       // Delete note
       const deleteNote = async (id)=>{
        //API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdkOTUwMzEyYjI5YzRlYTFmZWM1MDM4In0sImlhdCI6MTc0MjM2NDMzNn0.v9nwc19kNUF8SYDu6_VpVL7H31TJBXYMZbfo6C06NR0"
          }
         
        });
        const json =  response.json();
        console.log(json)

        console.log("deleting note" + id);
        const newNote = notes.filter((note)=>{return note._id!==id})
        setNotes((newNote))
       }
       
       // Edit note
       const editNote = async (id,title,description,tag)=>{
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdkOTUwMzEyYjI5YzRlYTFmZWM1MDM4In0sImlhdCI6MTc0MjM2NDMzNn0.v9nwc19kNUF8SYDu6_VpVL7H31TJBXYMZbfo6C06NR0"
          },
           
          body: JSON.stringify({title,description,tag})
         
        });
        const json = await response.json();
        console.log(json);
        
        let newnote = JSON.parse(JSON.stringify(notes))
        //Logic to Edit in client
        for (let index = 0; index < newnote.length; index++) {
          const element = notes[index];
          if(element._id === id){
            newnote[index].title = title;
            newnote[index].description = description;
            newnote[index].tag = tag;
            break;
          }
        }
        setNotes(newnote)
       }

    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;