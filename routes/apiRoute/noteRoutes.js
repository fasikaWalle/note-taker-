const router=require('express').Router()
const db=require('../../db/db.json')
const createNotes=require('../../lib/notes')
router.get('/notes',(req,res)=>{
    res.send(db)
})


router.post('/notes',(req,res)=>{
    // req.body.id=db.length.toString()
    // db.pushcreateNotesinstall uuid npm package)
    const result=createNotes(req.body,db)
    res.send(result)
})

module.exports=router