require('rootpath')();
import "babel-polyfill";
//const winston = require('winston');
const express=require('express');
var router  = express.Router();
const app = express();
const cors=require('cors');
const logger= require('./utils/logger.js');

//const expressWinston=require('express-winston');
const bodyParser=require('body-parser');
//var winston = require('winston')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, function () {
   
    logger.info('Server listening on port ' + port);
   // loggers.requestLogger("summa");
    });


    app.get('/log', function(req, res, next) {
       logger.info('log from router');
       logger.info(req.url);
       logger.error("summa")
   
    
    
        res.send('Hello, world!');
    });
    
    
