const express = require('express');
const cors = require('cors');
const consign = require('consign');

const app = express();
app.use(express.json());

consign({ cwd: 'app' }).include('routes').into(app);

module.exports = { app };