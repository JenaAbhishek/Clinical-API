import express from 'express';
import props from './config/properties';
import db from './config/db';
// import bodyParser from 'body-parser';
import bodyParser from "body-parser";
import clinicalRoutes from './routes';

db();

var app = express();

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var clinicalRouter = express.Router();

clinicalRoutes(clinicalRouter);
app.use('/clinicalsapi',clinicalRouter);

app.listen(props.PORT,(err)=>{
    if(err) console.log(err);
    console.log("application started on port:"+props.PORT);
})