const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from my over smarty pant!! okokok')
});


const users = [
    { id: 1, name: 'abik', email: 'vai@gmail.com' },
    { id: 2, name: 'Abir', email: 'Abir@gmail.com' },
    { id: 3, name: 'kola', email: 'kola@gmail.com' },
    { id: 4, name: 'Nola', email: 'Nola@gmail.com' },
]


app.get('/users', (req, res) => {
    //filter by search/ query parameter 
    if(req.query.name){
        const srearch = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(srearch))
        res.send(matched)
    }else{

    }
    res.send(users)
});

app.get('/users/:id', (req, res) => {

    console.log(req.params)

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    res.send(user)
})


app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('Fazle aaaaaam')
})

app.listen(port, () => {
    console.log('Listening to prot', port);
})