const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('/books', (req, res) => {
    res.json([
            {
                id: 1,
                title: "Alice's Adventures in Wonderland",
                author: "Charles Lutwidge Dodgson"
            },
            {
                id: 2,
                title: "Einstein's Dreams",
                author: "Alan Lightman"
            }
        ])
})

routes.get('/books/2', (req,res)=>{
    res.json(
            {
                id: 2,
                title: "Einstein's Dreams",
                author: "Alan Lightman"
            }
        )
})

module.exports = routes;