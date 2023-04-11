// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.index = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.post_signup = (req, res) => {
  User.post_signup(req.body, () => {
    res.send(true);
  });
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signin = (req, res) => {
  console.log(req.body);
  User.post_signin(req.body, (result) => {
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};
