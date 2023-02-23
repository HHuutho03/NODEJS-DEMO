const newrouter = require("./news");
const merouter = require("./me");
const coursesrouter = require("./course");
const siterouter = require("./site");
function router(app) {
  app.use("/new", newrouter);
  app.use("/me", merouter);
  app.use("/course", coursesrouter);
  app.use("/", siterouter);
}
module.exports = router;
