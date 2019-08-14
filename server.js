const express = require('express');
const skillsRouter = require('./routes/skills');
const path = require('path');
const logger = require('morgan');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use('/', skillsRouter);


app.listen(port, function(){
    console.log(`the app is running on ${port}`);
});