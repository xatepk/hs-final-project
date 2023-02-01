const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const newsRoutes = require('./routes/news');
const apartmentsRouters = require('./routes/apartments');
const usersRoutes = require('./routes/users');
const errorHandler = require('./middlewares/errorHandler');
const config = require('./config/index.js');
const { NotFound } = require('./errors');

const { PORT, MONGO_URL } = config;


const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }, err => {
  if(err) throw err;
  console.log('Connected to MongoDB!!!')
  });

app.use('/', newsRoutes);
app.use('/', apartmentsRouters);
app.use('/', usersRoutes);
// app.use(() => {
//   throw new NotFound('Запрашиваемый ресурс не найден');
// });

// app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}}`)
})