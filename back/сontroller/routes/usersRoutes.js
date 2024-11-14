const express = require('express')
const usersRouter = express.Router()

usersRouter.get('/', (req, res) => {
  // res.json({message: 'Пользовательская страница'});
  res.json({message: '/'})
});

usersRouter.get('/signin', (req, res) => {
  // res.json({name: "name1"});
  res.json({message: '/signin'})
});

usersRouter.get('/signup', (req, res) => {
  // res.json({name: "name1"});
  res.json({message: '/signup'})
});

module.exports = usersRouter;

