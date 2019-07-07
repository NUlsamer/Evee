var mongoose = require('mongoose');
const db = mongoose.connect('mongodb+srv://mknorr:mon!GZwk34@evee-kscij.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
const Schema = mongoose.Schema;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  const userModel = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    isActiv: { type: Boolean }
  })
  
  var User = mongoose.model('user', userModel);
});
