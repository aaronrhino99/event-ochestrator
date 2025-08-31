const express = require('express');
const preferencesRoute = require('./routes/preferences');
const eventsRoute = require('./routes/events');

const app = express();
app.use(express.json());

// routes
app.use('/preferences', preferencesRoute);
app.use('/events', eventsRoute);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;
