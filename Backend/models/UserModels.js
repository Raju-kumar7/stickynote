const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {type: String, required: true}, // String is shorthand for {type: String}
  password: {type: String, required: true}, // String is shorthand for {type: String}
  email: {type: String, required: true}, // String is shorthand for {type: String}

},{
    versionKey: false
});

const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    UserModel
}