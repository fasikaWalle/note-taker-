const router=require('express').Router()
const noteRoutes=require('..//apiRoute/noteRoutes')

router.use(noteRoutes)
module.exports=router
