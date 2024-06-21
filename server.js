const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.redirect('/frontpage.html')
})



app.get('*', function(req, res){
    res.send('404 page not found', 404);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

