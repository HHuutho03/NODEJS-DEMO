const Course = require("../models/Course");
const { multipeMongooseToObject } = require("../../utill/mongoose");

class Mecontroller {
  storedCourses(req, res, next) {
    Course.find()
      .then((course) =>
        res.render("me/Stored-courses", {
          course: multipeMongooseToObject(course),
        })
      )
      .catch(next);
  }
}

module.exports = new Mecontroller();
