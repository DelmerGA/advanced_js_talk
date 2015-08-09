var path = require("path");

module.exports = function htmlHelper(req, res, next) {
  var viewsPath = path.join(process.cwd(), "views");

  res.sendHTML = function (name) {
    var htmlPath = path.join(viewsPath, name +".html");
    res.sendFile(htmlPath);
  };

  next();
}