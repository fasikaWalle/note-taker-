const router=require('express').Router()
const {notes}=require('../../db/db.json')
const {createNotes,deleteNotes,validateData}=require('../../lib/notes')

router.get('/notes',(req,res)=>{
    res.json(notes)
})
router.post('/notes',(req,res)=>{
    if(!validateData(req.body)){
        res.status(404).send('The data is not formated properly')
    }else{
        const result=createNotes(req.body,notes)  
        res.send(result)
    }
})
router.delete('/notes/:id',(req,res)=>{
    const found=notes.filter(note=>note.id===req.params.id)
    console.log()
    if(found =='undefined' || found.length===0){
        res.status(404).send(`no result with the id ${req.params.id}`) 
    }else{
        const result=deleteNotes(req.params.id,notes)
        res.send(result)
    }
})
module.exports=router