const express = require('express');
const path = require('path');
app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
    // $data = [4, 8, 15, 16, 23, 42]; // Change this to whatever data you want
    // include(path.join(__dirname, 'public', 'index.php'));
    const dynamicContent = 'Hello World';

    res.render('index', { dynamicContent });
});

app.get('/dynamic-page', (req, res) => {
    const data = {
        name: 'Johns',
        lst: [4, 8, 15, 16, 23, 42, 50, 100]
    };

    const env = {
        nodeParent: 'body',
        nodeTag: 'div',
        nodeId: 'chart',
        nodeClassName: '',

        width: 400,
        height: 600,
        pWidth: 40,
        xInterval: 1,
        pHeight: 5,
        graphColor: 'steelblue',
    }

    // const message = 'This is some dynamic content!';
    res.render('dynamic-page', { data, env });
});

app.get('/p3', (req, res) => {
    res.render('p3');
});

app.get('/p4', (req, res) => {
    res.render('p4_zoom_with_axis');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});