const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;
const router = require("./routes");
const db = require("./config/db");
const { response } = require("express");

app.use(express.static(path.join(__dirname, "public")));

// HTTP GET/POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

//http logger
router(app);

///middleware
// app.get(
//   "/middleware",
//   function (req, res, next) {
//     if (["vevip", "vethuong"].includes(req.query.ve)) {
//       return next();
//     } else {
//       res.status(403).json({
//         message: "access denied",
//       });
//     }
//   },
//   function (req, res, next) {
//     res.json({
//       message: "successfully",
//     });
//   }
// );

// connect mongoose
db.connect();

// template engine
app.engine(
  "handlebars",
  handlebars.engine({
    extname: ".handlebars",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
