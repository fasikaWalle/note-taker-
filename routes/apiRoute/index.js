const router=require('express').Router()
const noteRoutes=require('../apiRoute/noteRoutes.js')

router.use(noteRoutes)
module.exports=router
