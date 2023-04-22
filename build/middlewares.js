"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFiles = exports.localsMiddleware = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "mfd";
  res.locals.loggedInUser = req.session.user;
  next();
};
exports.localsMiddleware = localsMiddleware;
var uploadFiles = (0, _multer["default"])({
  dest: "uploads/"
});
exports.uploadFiles = uploadFiles;