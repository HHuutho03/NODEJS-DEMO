class Newscontroller {
  index(req, res) {
    res.render("new");
  }
  show(req, res) {
    res.render("news detail !!!");
  }
}

module.exports = new Newscontroller();
