var User = require('../models/user');

module.exports = {
  registerUser: function(email, password) {
    let user = new User({
      firstname: "Test",
      lastname: "Person",
      email: email,
      password: password,
      isActiv: false
    });
  
    user.save();
  
    return "Hat geklappt!"
  }
};