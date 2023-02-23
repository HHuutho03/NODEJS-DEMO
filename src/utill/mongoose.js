module.exports = {
  multipeMongooseToObject: function (mongoose) {
    return mongoose.map((mongoose) => mongoose.toObject());
  },
  singleMongoodrToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
