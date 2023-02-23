const Course = require("../models/Course");
const { multipeMongooseToObject } = require('../../utill/mongoose');
class Sitecontroller {
  index(req, res, next) {
    Course.find({})
      .then((Course) => {
        res.render("home", {
          Course: multipeMongooseToObject(Course),
        });
      })
      .catch(next);
  }
  // index(req, res) {
  //   res.render("home");
  // }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new Sitecontroller();
