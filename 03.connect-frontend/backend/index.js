// const express = require('express')

import express from 'express'

const app = express();
const port =process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Math Problem",
            "content": "Why was the math book sad? Because it had too many problems."
        },
        {
            "id": 2,
            "title": "Scarecrow's Achievement",
            "content": "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            "id": 3,
            "title": "Cow's Holiday",
            "content": "Where do cows go on vacation? Moo York."
        },
        {
            "id": 4,
            "title": "Invisible Man",
            "content": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 5,
            "title": "Broken Pencil",
            "content": "Why don't you ever give Elsa a balloon? Because she will let it go."
        }
    ];
    res.send(jokes)
    
})

app.listen(port, () => {
    console.log(`Server is Run: http://localhost:${port}`)
})

