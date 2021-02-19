
const uuid=require('uuid')
const path=require('path')
const fs = require('fs')
//create notes
function createNotes(body,notesList){
    const note=body
    note.id=uuid.v4()
    notesList.push(note)
    fs.writeFileSync(path.join(__dirname,'../db/db.json'),JSON.stringify({notes:notesList},null,2))
    return note
}
//delete notes
function deleteNotes(id,notes){
        notes.splice(id,1)
        fs.writeFileSync(path.join(__dirname,'../db/db.json'),JSON.stringify({notes},null,2))
        return notes
}
//validte user data 
function validateData(query){
    if(typeof query.title !=='string' || typeof query.text!=='string'){
        return false
    }
    return true
}
module.exports={createNotes,deleteNotes,validateData}