const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()

app.use(cors())
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Welcome to mock login!'))

app.post('/login/:shouldFail', (req, res) => {
    const userExist = req.params.shouldFail === 'true' ? false : true;
    return res.status(200).json({
        userExist,
        name: "John Doe",
        id: "13242466"
    })
});

app.all('*', (req, res) => res.status(400).json({
    message: 'Route not found'
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))