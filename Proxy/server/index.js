require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const proxy = require('express-http-proxy');

require('../../../student-feedback/server/index.js')
// require('../Student-Feedback/server/index.js');
// require('../../instructors-service/server/index.js');
// require('../../header-sidebar-service/server/index.js');
// require('../../students-also-bought-service/server/server.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public')));

app.get('/:courseId/reviews', proxy('http://localhost:3002'));
// app.get('/:id/instructors', proxy('http://localhost:3002'));
// app.get('/courses/:courseId/header', proxy('http://localhost:3003'));
// app.get('/courses/:courseId/similarcourses', proxy('http://localhost:3004'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
