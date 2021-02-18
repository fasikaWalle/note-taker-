const express=require('express')
const app=new express()
const noteRoute=require('./routes/noteRoute')
const htmlRoute=require('./routes/htmlRoute')

const PORT=process.env.PORT||3006
app.listen(PORT,()=>{
    console.log('server run on port 3006')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// app.get('/notes',notesRoute)

app.get('*',htmlRoute)

