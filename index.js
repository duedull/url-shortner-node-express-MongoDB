const express = require('express')
const app = express()
const port = 1000
const { connect_db } = require('./controllers/url');
const { router } = require('./routes/url')

app.use(express.json());
app.use('/short', router)
app.get('/', (req, res) => { res.send('hello world') });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    connect_db();
})