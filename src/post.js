const express = require('express')
const app = express()
const axios = require('axios')
const fs = require("fs");
const serverless = require('serverless-http')

const router = express.Router()


/*
router.get('/test2', async(req, res)=>{ 


    if(String(req.get('Referrer')).includes('facebook.com')){
    	res.send('from fb')
	res.send(String(req.get('Referrer')).includes('facebook.com'))

    
    //res.send('lol')
    } else {
    res.send('not from fb')
    res.send(String(req.get('Referrer')).includes('facebook.com'))
   }
})
*/

router.get('/:id', async(req, res)=>{ 


    if(String(req.get('Referrer')).includes('facebook.com')){
    	var link = 'https://wholesomeness.com/hilarious-doggo-memes-to-boost-your-mood-15-pics/?orig_id=19776&loadpost=\nhttps://wholesomeness.com/cute-and-funny-cats-collection/?orig_id=19413&loadpost=\nhttps://wholesomeness.com/comics-living-with-a-dog/?orig_id=19369&loadpost=\nhttps://wholesomeness.com/doggo-pawsitive/?orig_id=18852&loadpost=\nhttps://wholesomeness.com/movies-starred-german-sherpherds/?orig_id=19522&loadpost=\nhttps://wholesomeness.com/meet-newly-adopted-cats-dogs/?orig_id=19672&loadpost=\nhttps://wholesomeness.com/funny-malfuctioning-kitties/?orig_id=19610&loadpost=\nhttps://wholesomeness.com/perfectly-timed-pictures-of-pets/?orig_id=19573&loadpost=\nhttps://wholesomeness.com/owl-trying-to-scare-off-family-cat/?orig_id=19327&loadpost=\nhttps://wholesomeness.com/german-shepherd-puppies/?orig_id=19532&loadpost=\nhttps://wholesomeness.com/cat-memes-to-make-caturday/?orig_id=19490&loadpost=\nhttps://wholesomeness.com/dogs-are-malfunctioning/?orig_id=19435&loadpost=\nhttps://wholesomeness.com/overly-dramatic-pets/?orig_id=19306&loadpost=\nhttps://wholesomeness.com/cat-people-vs-dog-people/?orig_id=19011&loadpost=\nhttps://wholesomeness.com/hilarious-broken-dogs/?orig_id=19305&loadpost=\nhttps://wholesomeness.com/cutest-photos-from-eye-bleach/?orig_id=19275&loadpost=\nhttps://wholesomeness.com/pit-bull-invites-pregnant-stray-cat-into-his-house-adopts-her-babies/?orig_id=19260&loadpost=\nhttps://wholesomeness.com/purrfessional-cats-with-real-jobs/?orig_id=19039&loadpost=\nhttps://wholesomeness.com/cat-memes-that-hits-little-too-close-to-home/?orig_id=19197&loadpost=\nhttps://wholesomeness.com/japanese-photographer-captures-beautiful-photos-of-stray-cats/?orig_id=19161&loadpost=\nhttps://wholesomeness.com/christmas-dogs-family-photobomb/?orig_id=19116&loadpost=\nhttps://wholesomeness.com/animals-adopted-before-after/?orig_id=19063&loadpost=\nhttps://wholesomeness.com/dogs-before-and-after-adoption/?orig_id=18334&loadpost=\nhttps://wholesomeness.com/dogs-discovered-mirrors/?orig_id=18046&loadpost=\nhttps://wholesomeness.com/maine-coon-kittens/?orig_id=19040&loadpost=\nhttps://wholesomeness.com/domestic-kitty-adopts-a-baby-lynx/?orig_id=18994&loadpost=\nhttps://wholesomeness.com/vikings-used-to-gift-ferocious-kittens/?orig_id=19028&loadpost=\nhttps://wholesomeness.com/fluffiest-lynx-paws/?orig_id=18960&loadpost=\nhttps://wholesomeness.com/cat-obsessed-with-bananas/?orig_id=18879&loadpost=\nhttps://wholesomeness.com/pet-owners-share-hysterical-stories/?orig_id=17922&loadpost=\nhttps://wholesomeness.com/cat-slinky-haircut/?orig_id=18940&loadpost=\nhttps://wholesomeness.com/majestic-brown-husky-travels/?orig_id=18681&loadpost=\nhttps://wholesomeness.com/adorable-animal-photos/?orig_id=18792&loadpost=\nhttps://wholesomeness.com/pixie-and-brutus-emotional-ride/?orig_id=18641&loadpost=\nhttps://wholesomeness.com/glow-ups-of-pets/?orig_id=18815&loadpost=\nhttps://wholesomeness.com/cats-stole-owners-significant-others/?orig_id=18837&loadpost=\nhttps://wholesomeness.com/overly-dramatic-cats-dogs/?orig_id=17946&loadpost=\nhttps://wholesomeness.com/couch-comes-with-a-free-cat/?orig_id=18714&loadpost=\nhttps://wholesomeness.com/hidden-dog-challenge/?orig_id=18728&loadpost=\nhttps://wholesomeness.com/life-with-cats-in-hysterical-comics/?orig_id=18088&loadpost=\nhttps://wholesomeness.com/thats-not-my-cat/?orig_id=18372&loadpost=\nhttps://wholesomeness.com/cats-defy-the-laws-of-gravity/?orig_id=18478&loadpost=\nhttps://wholesomeness.com/husky-picks-out-her-best-friend/?orig_id=18615&loadpost=\nhttps://wholesomeness.com/dogs-who-have-no-idea-how-big-they-are/?orig_id=18562&loadpost=\nhttps://wholesomeness.com/grumpy-pets-in-christmas-costumes/?orig_id=18479&loadpost=\nhttps://wholesomeness.com/big-dogs/?orig_id=18425&loadpost=\nhttps://wholesomeness.com/husky-rules/?orig_id=18538&loadpost=\nhttps://wholesomeness.com/dwarf-german-shepherd/?orig_id=18528&loadpost=\nhttps://wholesomeness.com/man-punched-bear-to-save-dog/?orig_id=18323&loadpost=\nhttps://wholesomeness.com/cats-shamed/?orig_id=18289&loadpost=\nhttps://wholesomeness.com/huskies-shamed-for-behaviour/?orig_id=18192&loadpost=\nhttps://wholesomeness.com/quirky-cats-dogs/?orig_id=18255&loadpost=\nhttps://wholesomeness.com/most-mischievous-doggo-ever/?orig_id=18047&loadpost=\nhttps://wholesomeness.com/adorable-reactions-adopted-dogs-who-are-coming-home-for-the-first-time-18-pics/?orig_id=18219&loadpost=\nhttps://wholesomeness.com/photogenic-pets/?orig_id=18195&loadpost=\nhttps://wholesomeness.com/big-dogs-pretending-to-be-little-puppies/?orig_id=17982&loadpost=\nhttps://wholesomeness.com/dog-ratings/?orig_id=17961&loadpost=\nhttps://wholesomeness.com/challenges-that-dog-owners-face/?orig_id=17867&loadpost=\nhttps://wholesomeness.com/dog-posts-boost-your-serotonin/?orig_id=17681&loadpost=\nhttps://wholesomeness.com/dogs-being-the-drama-queens/?orig_id=17866&loadpost=\nhttps://wholesomeness.com/dogs-of-the-world/?orig_id=17840&loadpost=\nhttps://wholesomeness.com/kittens-hanging-out-in-pockets/?orig_id=17789&loadpost=\nhttps://wholesomeness.com/pooping-dog-calendar-2021/?orig_id=17816&loadpost=\nhttps://wholesomeness.com/cats-love-their-humans/?orig_id=17774&loadpost=\nhttps://wholesomeness.com/rescue-kittens-caught-in-mid-pounce/?orig_id=17757&loadpost=\nhttps://wholesomeness.com/wholesome-pet-posts/?orig_id=17705&loadpost=\nhttps://wholesomeness.com/animals-took-over-foster-home/?orig_id=17588&loadpost=\nhttps://wholesomeness.com/weird-things-about-dogs/?orig_id=17680&loadpost=\nhttps://wholesomeness.com/cats-who-love-plants/?orig_id=17657&loadpost=\nhttps://wholesomeness.com/dogs-are-the-purest-creatures/?orig_id=17625&loadpost=\nhttps://wholesomeness.com/cats-in-places-they-shouldnt-be/?orig_id=17624&loadpost=\nhttps://wholesomeness.com/dogs-are-ultimate-good-boys/?orig_id=17586&loadpost=\nhttps://wholesomeness.com/brilliantly-captured-pet-photos/?orig_id=17508&loadpost=\nhttps://wholesomeness.com/cat-panorama-fails/?orig_id=17481&loadpost=\nhttps://wholesomeness.com/cats-cuddling-with-dogs/?orig_id=17528&loadpost=\nhttps://wholesomeness.com/dogs-giving-the-disapproving-looks/?orig_id=17480&loadpost=\nhttps://wholesomeness.com/ghost-dogs/?orig_id=17454&loadpost=\nhttps://wholesomeness.com/dog-muzzle/?orig_id=17425&loadpost=\nhttps://wholesomeness.com/cats-who-took-over-doll-beds/?orig_id=17329&loadpost=\nhttps://wholesomeness.com/relatable-doggo-memes/?orig_id=17391&loadpost=\nhttps://wholesomeness.com/doggo-snaps/?orig_id=17354&loadpost=\nhttps://wholesomeness.com/service-dogs/?orig_id=17356&loadpost=\nhttps://wholesomeness.com/terrible-cat-jokes/?orig_id=17158&loadpost=\nhttps://wholesomeness.com/cats-have-never-been-fed/?orig_id=17201&loadpost=\nhttps://wholesomeness.com/animal-weddings/?orig_id=17245&loadpost=\nhttps://wholesomeness.com/siberian-husky-has-a-rare-brown-coat/?orig_id=17219&loadpost=\nhttps://wholesomeness.com/angry-cats-you-wouldnt-want-to-mess-with/?orig_id=17270&loadpost=\nhttps://wholesomeness.com/animals-who-camouflage/?orig_id=17174&loadpost=\nhttps://wholesomeness.com/differences-between-cats-and-dogs/?orig_id=17142&loadpost=\nhttps://wholesomeness.com/animals-who-found-their-homes/?orig_id=17010&loadpost=\nhttps://wholesomeness.com/slipper-on-your-pets-head/?orig_id=17096&loadpost=\nhttps://wholesomeness.com/beds-for-stray-animals/?orig_id=16948&loadpost=\nhttps://wholesomeness.com/tribute-to-a-dog/?orig_id=16944&loadpost=\nhttps://wholesomeness.com/shiba-inu-sleeps-in-food/?orig_id=16989&loadpost=\nhttps://wholesomeness.com/wooden-bed-includes-playground-for-cats/?orig_id=16980&loadpost=\nhttps://wholesomeness.com/thoughts-cats-have-about-humans/?orig_id=16896&loadpost=\nhttps://wholesomeness.com/cats-are-aliens-in-disguise/?orig_id=16907&loadpost=\nhttps://wholesomeness.com/dog-guides-rescuers/?orig_id=16795&loadpost=\nhttps://wholesomeness.com/wholesome-animal-posts/?orig_id=16813&loadpost=\nhttps://wholesomeness.com/things-that-are-normal-for-a-cat-owner/?orig_id=16811&loadpost=';
    	
    	var links = link.split("\n");
    	var random = Math.floor(Math.random() * 100);
	res.redirect(links[random]+req.params.id);
    
    //res.send('lol')
    	
    } else {

    const data = await axios.get('https://wholesomeness.com/wp-json/wp/v2/posts/'+req.params.id)
     res.setHeader('Content-Type', 'text/html');
     var html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>'+data.data.title.rendered+'</title>\n<meta property="og:locale" content="en_US">\n<meta property="og:type" content="article">\n<meta property="og:title" content="'+data.data.title.rendered+'">\n<meta property="og:description" content="'+data.data.uagb_excerpt+'">\n<meta property="og:url" content="https://wholesomeness.netlify.app/.netlify/functions/post/'+req.params.id+'/">\n<meta property="og:site_name" content="Wholesomeness">\n<meta property="article:section" content="Wholesomeness">\n<meta property="og:image" content="'+data.data.featured_image_src+'">\n<meta property="og:image:alt" content="'+data.data.title.rendered+'">\n<style>\nimg { width: 100%; height: auto; }\nul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333; }\nli {float: left; }\nli a { display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none; }\nli a:hover:not(.active) { background-color: #111; }\n.active { background-color: #4CAF50; }\n</style>\n</head>\n<body style="background:#eee;">\n<div style="padding:20px;margin:30px auto;padding:20px;max-width:800px;background:white;box-shadow: 5px 5px 5px #888888;">\n<div>\n<ul>\n<li><a href="#home">Home</a></li>\n<li><a href="#news">News</a></li>\n<li><a href="#contact">Contact</a></li>\n<li style="float:right"><a class="active" href="#about">About</a></li>\n</ul>\n</div>\n<div><h1>'+data.data.title.rendered+'</h1>\n'+data.data.content.rendered+'\n</div>\n</div>\n</body>\n</html>'

     res.send(html)     
     
   }
})



app.use('/.netlify/functions/post', router)


module.exports.handler = serverless(app)

