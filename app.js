const express = require('express');
const app = express();
var message = 'lol';
const port = 8000;
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res)=>{
    console.log('woooah')
    res.render('index.ejs', {message})
})

app.get('/go', (req, res)=>{
    res.render('go.ejs');
})

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send('wow');
})

app.use(express.static('public'));

app.listen(port, ()=>{
    console.log('listening on port: ', + port);
})
