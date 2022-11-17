const { Schema, model } = require('mongoose');

const dataSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  subtitle: {
    type: String,
    minlength: 2,
    required: true,
  },
  title: {
    type: String,
    minlength: 2,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /https?:\/\/(w{1,3}\.)?\S+(#$)?/gm.test(v);
      },
      message: (props) => `${props.value} is not a valid news url!`,
    },
  },
});

module.exports = model('news', dataSchema);