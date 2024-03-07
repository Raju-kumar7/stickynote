const mongoose = require('mongoose');

const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: {type: String, required: true}, // String is shorthand for {type: String}
  body: {type: String, required: true}, // String is shorthand for {type: String}
  user: {type: String, required: true}, // String is shorthand for {type: String}

},{
    versionKey: false
});

const NoteModel = mongoose.model('Note', NoteSchema)

module.exports = {
    NoteModel
}