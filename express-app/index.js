import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>
    //get data first
    res.json(data)
    // res.send("GET request on ", PORT) throwing error
    // res.send(`GET request on ${PORT}`)
)

//chain methods
app.route('/item')
    .get((req, res) =>
        res.send(`GET request with app.route method on ${PORT}`)
    )
    .put((req, res) => 
        res.send(`PUT request with app.route method on ${PORT}`)
    )
    .delete((req, res) => 
        res.send(`DELETE request with app.route method on ${PORT}`)
    )

app.post('/newItem', (req, res) =>
    res.send(`POST request on ${PORT}`)
)

//route handlers
app.get('/item/:id', (req, res, next) => {
    console.log(req.params.id);
    let user = Number(req.params.id);
    res.send(data[user]);
    next();
}, (req, res) => 
    console.log("Did you get the right data?")
);

app.listen(PORT, () => {
    console.log("Your server is running on", PORT);
    console.log(data)
})
