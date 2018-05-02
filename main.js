import express from 'express'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import path from 'path'
import fs from 'fs'
import routes from './api/routes/routes'
import Corrections from './api/models/correctionModel'
import mongoose from 'mongoose'
const app = express()

// express config.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride());
app.use(express.static('./public/'));
app.set('port', process.env.PORT || 8000)

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds147974.mlab.com:47974/paragraphs'); 

// Use routes.
routes(app)

// start server.
app.listen(app.get('port'), function () {
  console.log("Server started on port", app.get('port'));
});