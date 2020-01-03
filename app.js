const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Welcome to mock login!'))

app.post('/login/:shouldFail', (req, res) => {
    const userExist = req.params.shouldFail === 'true' ? false : true;
    return res.status(200).json({
        userExist
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))