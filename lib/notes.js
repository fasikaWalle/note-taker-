
const uuid=require('uuid')

function createNotes(query,notes){
    const result=notes
    query.id=uuid.v4()
    result.push(query)
    return result
}
module.exports=createNotes