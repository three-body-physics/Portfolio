var express = require('express');
var path = require('path');
var port = process.env.PORT || 5000;
var serveStatic = require('serve-static')
var router = express.Router();

var app = express();

app.use(serveStatic(path.join(__dirname, 'dist', 'static')));
app.use(router);

router.get('/*', function (req, res) {  
     return res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);