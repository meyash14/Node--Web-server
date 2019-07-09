//BUILDING TEMPLATE ENGINE PREV CODE COPIED TO APP1.JS
//express only looks for directory named views so its name has to remain views
const express = require ('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const test = process.cwd()
const publicDir = path.join(__dirname,'../public') //paths defined for express config
const partialsPath = path.join(__dirname,'../templates/partials') 
//customising views directory
const viewsPath = path.join(__dirname,'../templates/views')

//for handlebar usage
app.set('views',viewsPath)
app.set('view engine','hbs') //setting name of view engine for express.
//customising views directory
hbs.registerPartials(partialsPath)

app.use(express.static(publicDir)) //setting the path to public dir ie it will be accessible from outside for browser




//handlebars are suppsed to be in views folder in your root directory

//if we delete index.html from public we can use index.hbs using get method of express

app.get('',(req,res)=>{     
    
    res.render('index',{
        title:'Weather App',
        name : 'Yash'
    }) //render fn is to be used for templates instead of send
})
// views folder is inside src of our app
//call to app.com/about
app.get('/about',(req,res)=>{     
    
    res.render('about.hbs',{
        title:'About me',
        name : 'Yash'
    }) //render fn is to be used for templates instead of send
})

//help call
app.get('/help',(req,res)=>{     
    
    res.render('help.hbs',{
        message:test,
        title: 'Help',
        name: 'Yash'
    }) //render fn is to be used for templates instead of send
})
app.get('/help/*',(req,res)=>
{
    res.send('Help Article not found')
})

// error 404 not found call-> has to come last as if it finds matching argument above it stops and doesnt look any furthur
app.get('*',(req,res)=>{     // * is the wild charactar
    
    res.render('404.hbs',{
        title: 'Error 404',
        name:'yash',
        message : 'Page not found'
    }) //render fn is to be used for templates instead of send
})


 //all things that will be exposed to browser need to be in public folder :HTML,CSS,JS
app.listen(3000,()=>{
    console.log('Server is up on port 3000')
}) 

