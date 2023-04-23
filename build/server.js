"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
require("./db.js");
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _rootRouter = _interopRequireDefault(require("./routers/rootRouter.js"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
var _middlewares = require("./middlewares.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 4000;
var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: "https://endearing-raindrop-af7125.netlify.app/",
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use((0, _expressSession["default"])({
  secret: "mfd",
  resave: false,
  saveUninitialized: false,
  store: _connectMongo["default"].create({
    mongoUrl: process.env.DB_URL
  })
}));
app.use(_middlewares.localsMiddleware);
app.use("/", _rootRouter["default"]);
var handleListening = function handleListening() {
  return console.log("\u2705 Server listenting on port http://localhost:".concat(PORT, " \uD83D\uDE80"));
};
app.listen(PORT, handleListening);
var _default = app;
exports["default"] = _default;