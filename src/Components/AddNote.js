import React,{useState,useEffect} from 'react'

function AddNote({handleAddNote,UpdatedText}) {
    const [newNote,setNewNote] = useState('');
    const characterLimit = 200;
    const handleClick = ()=>{
        if(newNote.trim().length>0){
            handleAddNote(newNote,document.getElementById('007').value);
            setNewNote('');
        }
    }
    useEffect(()=>{
        if(UpdatedText.length>0)
            setNewNote(UpdatedText);
    },[UpdatedText])
    return (
        <div className='note new'>
            <textarea rows='10' columns='10' 
            placeholder='Enter your text here...'
            value = {newNote}
            onChange={(event)=>{
                if(characterLimit-event.target.value.length)
                setNewNote(event.target.value)
            }}
            >
            </textarea>
            <div className='bottom'>
                <small>{characterLimit - newNote.length} characters</small>
                <button className='save' onClick={handleClick}>Save</button>
                <select id='007'>
                    <option value='Sports' >Sports</option>
                    <option value='WebDevelopment'>WebDevelopment</option>
                </select>
            </div>
        </div>
    )
}

export default AddNote
