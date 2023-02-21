const { Schema, model, default: mongoose } = require('mongoose');


const dataSchema = new Schema({
  imageUrls: [{
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /https?:\/\/(w{1,3}\.)?\S+(#$)?/gm.test(v);
      },
      message: (props) => `${props.value} is not a valid news url!`,
    },
  }],
  underground: {
    type: String,
    minlength: 2,
    required: true,
  },
  area: {
    type: String,
    minlength: 2,
    required: true,
  },
  location: {
    type: String,
    minlength: 2,
    required: true,
  },
  city: {
    type: String,
    minlength: 2,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 65.00,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    default: [],
    ref: 'user',
  }],
  rooms: {
    type: Number,
    required: true,
    default: 4,
  },
  description: {
    type: String,
    default: "Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание"
  }
});

module.exports = model('apartments', dataSchema);