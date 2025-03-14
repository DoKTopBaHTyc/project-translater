const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path')
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const eventRouter = require('./routes/eventRouter');
const translitRouter = require('./routes/translitRouter');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api', eventRouter);
app.use('/api', translitRouter);
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
