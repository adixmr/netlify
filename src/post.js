const express = require('express')
const app = express()
const axios = require('axios')

const serverless = require('serverless-http')

const router = express.Router()

/*
router.get('/', async(req, res)=>{
    //  axios.get('https://wholesomeness.com/wp-json/wp/v2/posts').then((data)=>{
    //     res.setHeader('Content-Type', 'application/json');
    //     res.send(JSON.stringify(data))
    // })
    const data = await axios.get('https://wholesomeness.com/wp-json/wp/v2/posts')
     res.setHeader('Content-Type', 'application/json');
     res.send(data.data)
     
})
*/


router.get('/:id', async(req, res)=>{ 
    const data = await axios.get('https://wholesomeness.com/wp-json/wp/v2/posts/'+req.params.id)
     res.setHeader('Content-Type', 'text/html');
     res.send(data.data.content.rendered)     
})



router.get('/test', (req, res)=>{
    res.json({
        'path': 'test',
        'text': 'hello from test hehe'
    })
})


app.use('/.netlify/functions/post', router)


module.exports.handler = serverless(app)

