import createError from 'http-errors';
import auth from '../middleware/auth';

// setup
const router = require('express').Router(); // eslint-disable-line
module.exports = router;

router.get('/', auth, (req, res, next) => {
  res.render('dashboard');
});

router.get('/login', (req, res, next) => {
  res.render('login');
});

// all other methods, show not found page
router.all('/*', auth, (req, res, next) => {
  next(createError(404));
});
