const express = require('express')
const app = express()
const port = 1000
const { connect_db } = require('./controllers/url');
const { router } = require('./routes/url')
const { new_Schema_url } = require('./models/url')

app.use(express.json());
app.use('/short', router)

app.get('/', async (req, res) => {
    const vists = await new_Schema_url.find({});
    console.log(vists);
    return res.end(`
        <html>
        <body>
        <ol>
        ${vists.map(item => `<li>${item.short_id} - ${item.redirect_Url} - ${item.visitHistory.length}</li>`).join('')}
        </ol>
        </body>
        <html>
        `)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    connect_db();
});