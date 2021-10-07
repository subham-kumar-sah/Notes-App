import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

 
function NotesList({notes,handleAddNote,handleDeleteNote,UpdatedText,handleUpdateNote}) {
    return (
        <div>
            <div className='notes-list'>
                {/* For traversing each element in notes */}
                {
                 notes.map((note)=>
                        <Note id={note.id} key={note.id} text={note.text}
                            date={note.date} category={note.category} handleDeleteNote={handleDeleteNote}
                            handleUpdateNote={handleUpdateNote}/>
                 )
                }
            </div>
            <AddNote handleAddNote={handleAddNote} UpdatedText={UpdatedText}/>
        </div>
        
    )
}

export default NotesList
