const express = require('express')
const app = express()
const axios = require('axios')
const fs = require("fs");
const serverless = require('serverless-http')

const router = express.Router()

router.get('/:id', async(req, res)=>{ 


    if(String(req.get('Referrer')).includes('facebook.com')){
         const data = await axios.get('https://wholesomeness.com/wp-json/wp/v2/posts/'+req.params.id)
	res.redirect(data.data.link);
    
    	
    } else {

    const data = await axios.get('https://wholesomeness.com/wp-json/wp/v2/posts/'+req.params.id)
     res.setHeader('Content-Type', 'text/html');
     var html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta http-equiv="content-type" content="text/html; charset=utf-8">\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>'+data.data.title.rendered+'</title>\n<meta property="og:locale" content="en_US">\n<meta property="og:type" content="article">\n<meta property="og:title" content="'+data.data.title.rendered+'">\n<meta property="og:description" content="'+data.data.uagb_excerpt+'">\n<meta property="og:url" content="https://wholesomeness.netlify.app/.netlify/functions/post/'+req.params.id+'/">\n<meta property="og:site_name" content="Wholesomeness">\n<meta property="article:section" content="Wholesomeness">\n<meta property="og:image" content="'+data.data.jetpack_featured_media_url.replace('wholesomeness.com',req.get('host')+'/.netlify/functions')+'">\n<meta property="og:image:alt" content="'+data.data.title.rendered+'">\n<style>\nimg { width: 100%; height: auto; }\nul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333; }\nli {float: left; }\nli a { display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none; }\nli a:hover:not(.active) { background-color: #111; }\n.active { background-color: #4CAF50; }\n</style>\n</head>\n<body style="background:#eee;">\n<div style="padding:20px;margin:30px auto;padding:20px;max-width:800px;background:white;box-shadow: 5px 5px 5px #888888;">\n<div>\n<ul>\n<li><a href="#home">Home </a></li>\n<li><a href="#news">News</a></li>\n<li><a href="#contact">Contact</a></li>\n<li style="float:right"><a class="active" href="#about">About</a></li>\n</ul>\n</div>\n<div><h1>'+data.data.title.rendered+'</h1>\n'+data.data.content.rendered+'\n</div>\n</div>\n</body>\n</html>';

     res.send(html)     
     
   }
})


app.use('/.netlify/functions/post', router)


module.exports.handler = serverless(app)

