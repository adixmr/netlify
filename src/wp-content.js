const express = require('express')
const app = express()
const axios = require('axios')
const fs = require("fs");
const serverless = require('serverless-http')

const router = express.Router()
 

router.get('/:url(*)', async(req, res)=>{
	res.redirect('https://unwomanly.com/wp-content/'+req.params.url);	
})



app.use('/.netlify/functions/wp-content', router)


module.exports.handler = serverless(app)
	
