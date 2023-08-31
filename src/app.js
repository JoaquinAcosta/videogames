require('dotenv').config();

const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

const videogamesRoutes = require('./routes/videogamesRoutes');

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(videogamesRoutes);


app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));