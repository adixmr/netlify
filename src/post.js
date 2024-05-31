const express = require('express')
const app = express()
const axios = require('axios')
const fs = require("fs");
const serverless = require('serverless-http')

const router = express.Router()

router.get('/:id', async(req, res)=>{ 

    const data = await axios.get('https://wholesomeness.com/wp-json/wp/v2/posts/'+req.params.id)
     
   // console.log(data);
	    
     res.setHeader('Content-Type', 'text/json');

     res.send(data)     
     
   }
})


app.use('/.netlify/functions/post', router)


module.exports.handler = serverless(app)

