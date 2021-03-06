const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../config")

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    iat: timestamp
  }, config.secret)
}

exports.signin = (req, res, next) => {
  //  User has already had their email and password authed
  //  We just need to give them for a token
  res.send({token: tokenForUser(req.user)})
}

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  // See if a user with the given email exists
  User.findOne({email: email}, (err, existingUser) => {
    if(err){
      return next(err);
    }
    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({error: 'Email is in use'})
    }
    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });
    user.save((err) => {
      if(err) {
        return next(err);
      }
      // Respond to request indicating the user was created
      res.json({token: tokenForUser(user)});
    });
  })
}