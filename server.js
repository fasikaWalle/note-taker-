const express=require('express')
const app=new express()
const path=require('path')
const noteRoute=require('./routes/apiRoute')
const htmlRoute=require('./routes/htmlRoute')

const PORT=process.env.PORT||3006
app.listen(PORT,()=>{
    console.log('server run on port 3006')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/',htmlRoute)
app.use('/api',noteRoute)

app.use(express.static(path.join(__dirname,'public')))


