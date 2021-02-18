const router=require('express').Router()
const {notes}=require('../../db/db.json')
const {createNotes,deleteNotes}=require('../../lib/notes')
router.get('/notes',(req,res)=>{
    res.send(notes)
})

router.post('/notes',(req,res)=>{
    const result=createNotes(req.body,notes)
    res.send(result)
})

router.delete('/notes/:id',(req,res)=>{
const found=notes.filter(note=>note.id===req.params.id)
console.log(found)
if(found){
    const result=deleteNotes(req.params.id,notes)
    res.send(result)
}else{
    res.status(404).send(`no result with the id ${req.params.id}`) 
}

})
module.exports=router