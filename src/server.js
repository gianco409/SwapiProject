const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const timeout = require('connect-timeout')
const { config } = require('./config')
const api = require('./api')

const app = express();

app.use(timeout(`${config.timedOut}s`))
app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

app.listen(config.prjPort, function () {
    console.log(`Listening on port ${config.prjPort}!`)
});

module.exports = app;