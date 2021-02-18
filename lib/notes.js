
const uuid=require('uuid')
const path=require('path')
const fs = require('fs')

function createNotes(body,notes){
    console.log(notes)
    const note=body
    note.id=uuid.v4()
    notes.push(note)
    fs.writeFileSync(path.join(__dirname,'../db/db.json'),JSON.stringify({notes},null,2))
    return notes
}
function deleteNotes(id,notes){
        notes.splice(id,1)
        fs.writeFileSync(path.join(__dirname,'../db/db.json'),JSON.stringify({notes},null,2))
        return notes
}
function validateData(query){
    if(typeof query.title !=='string' || typeof query.text!=='string'){
        return false
    }
    return true
}
module.exports={createNotes,deleteNotes,validateData}