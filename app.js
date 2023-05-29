require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port=process.env.PORT;

//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


//servir contenido estatico
app.use(express.static('public'));

// app.get('/',  (req, res)=> {
//   res.send('Hola mundo/home page')
// })
app.get('/',  (req, res)=> {
  res.render('home',{
    nombre:'Joaquin Imwinkelried',
    titulo:'Curso de Node'
  });
})

app.get('/generic',  (req, res)=> {
  res.render('generic',{
    nombre:'Joaquin Imwinkelried',
    titulo:'Curso de Node'
  });
})

app.get('/elements',  (req, res)=> {
  res.render('elements',{
    nombre:'Joaquin Imwinkelried',
    titulo:'Curso de Node'
  });
})


// app.get('/hola-mundo',  (req, res)=> {
//   res.send('Hola Mundo/hola-mundo')
// })
// app.get('/generic',  (req, res)=> {
//   res.sendFile(__dirname+'/public/generic.html');
// })
// app.get('/elements',  (req, res)=> {
//   res.sendFile(__dirname+'/public/elements.html');
// })
app.get('*',  (req, res)=> {
  res.sendFile(__dirname+'/public/404.html');
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})