import React,{ useState,useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './Components/NotesList';
import Search from './Components/Search';
import Header from './Components/Header';

function App() {
  const [updateText,setUpdateText] = useState('');
  const [notes,setNotes] = useState([]);
const addNote = (text,category)=>{
  const date = new Date();
  console.log(category)
  const newNote = {
    id : nanoid(),
    text : text,
    date : date.toLocaleDateString(),
    category : category
  }
  const newNotes = [...notes,newNote];
  setNotes(newNotes)
}
const deleteNote = (id)=>{
  const newNotes = notes.filter((note)=>{
      return note.id!==id; 
  })
  setNotes(newNotes);
}

const updateNote = (text)=>{
  setUpdateText(text);
}

const [searchText,setSearchText] = useState('');

useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
},[notes])
  return (
    <div className="notes-app">
      <Header/>
      <Search handleSearchNote={setSearchText} />
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
       handleAddNote={addNote} handleDeleteNote={deleteNote}
        UpdatedText={updateText} handleUpdateNote={updateNote}
        />
    </div>
  );
}

export default App;
