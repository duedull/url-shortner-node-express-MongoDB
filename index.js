const express = require('express')
const app = express()
const port = 1000
const { connect_db } = require('./controllers/url');
const { router } = require('./routes/url')
const { new_Schema_url } = require('./models/url')
const { Staticrouter } = require('./routes/staticRouter')
const path = require('path');

app.set('views', path.resolve('./views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.use('/short', router);
app.use('/', Staticrouter);


// app.get('/', async (req, res) => {
//     const vists = await new_Schema_url.find({});
//     return res.render('index', {
//         urls: vists,
//     });
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    connect_db();
});

{/* <html>
        <body>
        <ol>
        ${vists.map(item => `<li>${item.short_id} - ${item.redirect_Url} - ${item.visitHistory.length}</li>`).join('')}
        </ol>
        </body>
        <html></html> */}