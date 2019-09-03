

const {createLogger,format,transports} =require('winston');

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info =>`[${info.timestamp}] ${info.level} ${info.message}`)

    ),
    transports: [

        new transports.File({
            maxsize: 512000,
            maxFiles: 5,
            filename: `${__dirname}/../logs/log-api.log`

        }),
        new transports.Console({
            level: 'debug',
            //format:format.combine(format.simple())
        })
    ],
    
});
//import { strict } from "assert";
// 'use strict'
// const winston  = require('winston');
// const consoleLog = new winston.transports.Console()
// module.exports={

//     requestLogger:createRequestLogger([consoleLog])
// }
// function createRequestLogger(transports){
// const requestLogger =winston.createLogger({
//     format:getRequestLogFormatter(),
//     transports:transports
// })

// return function logRequest(req, res, next) {
//     requestLogger.info({req, res})
//     //next()
// }
// }

// function getRequestLogFormatter()
// {
//     const {combine, timestamp, printf} = winston.format;
//     return combine(
//         timestamp(),
//         printf(info => {
//             const {req,res}=info.message;
//             return  `[${info.timestamp}] ${info.level} ${info.message}`
//         })
//     );
// }
