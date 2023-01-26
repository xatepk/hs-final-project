const { Schema, model, default: mongoose } = require('mongoose');


const dataSchema = new Schema({
  city: {
    type: String,
    minlength: 2,
    required: true,
  },
});

dataSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {

  const self = this

  self.findOne(condition, (err, result) => {

      return result ? callback(err, result) : self.create(condition, (err, result) => { return callback(err, result) })

  })

}

module.exports = model('city', dataSchema);