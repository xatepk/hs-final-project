const { Schema, model } = require('mongoose');

const getStringData = () => {
  let format = new Date().toLocaleString('ru-RU', {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).replace(/\s*г\./, ""). split(' ');
  format[1] = format[1][0].toUpperCase() + format[1].slice(1);
  return format.join(' ')
}

const dataSchema = new Schema({
  date: {
    type: String,
    default: getStringData(),
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