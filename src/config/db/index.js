const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev",{
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true
    });
    console.log("connect successfully");
  } catch (error) {
    console.log("connect error");
  }
}
module.exports = { connect };
