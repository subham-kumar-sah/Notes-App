import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import './Style.css';

function Note({id,text,date,category,handleDeleteNote,handleUpdateNote}) {
    return (
        <div className='note'>
            <h5>{category}</h5>
            <span>{text}</span>
            <div className='bottom'>
                <small>{date}</small>
                <button onClick={()=>{handleUpdateNote(text);
                handleDeleteNote(id);}}>Edit</button>
                <MdDeleteForever onClick ={()=>handleDeleteNote(id)} className='delete-icon' size='1.4em'/>
            </div>
        </div>
    )
}

export default Note
