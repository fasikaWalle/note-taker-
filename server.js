const express=require('express')
const path=require('path')
const noteRoute=require('./routes/apiRoute')
const htmlRoute=require('./routes/htmlRoute')

const app=new express()
const PORT=process.env.PORT||3006
app.listen(PORT,()=>{
    console.log('server run on port 3006')
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')))
app.use('/api',noteRoute)
app.use('/',htmlRoute)


