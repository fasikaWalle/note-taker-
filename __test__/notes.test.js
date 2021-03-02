
const fs=require("fs")
const { createNotes,deleteNotes,validateData } = require("../lib/notes")
const {notes}=require('../db/db.json')
jest.mock("fs")
test('create notes',()=>{
     
const note=createNotes({ title: "test",
text:"sample"},notes)
     expect(note.title).toBe("test")   
     expect(note.text).toBe("sample")   
})

test('delete notes',()=>{    
     const note=[{ title: "test",
     text:"sample", id:'abcdef'} ] 
     deleteNotes('abcdef',note) 
     expect(note.length).toBe(0)
})

test('validate data',()=>{    
     let note=validateData({ title: "test",
     text:"sample"})
     expect(note).toBe(true)
      note=validateData({ title: "test",
     text:32})  
     expect(note).toBe(false)
})