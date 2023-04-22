"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../controllers/userController.js");
var _scheduleController = require("../controllers/scheduleController.js");
var _diaryController = require("../controllers/diaryController.js");
var _monthDataController = require("../controllers/monthDataController.js");
var _exerciseController = require("../controllers/exerciseController.js");
var _emotionController = require("../controllers/emotionController.js");
var _photoUrlController = require("../controllers/photoUrlController.js");
var _middlewares = require("../middlewares.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rootRouter = _express["default"].Router();
rootRouter.route("/join").post(_userController.postJoin);
rootRouter.route("/login").post(_userController.postLogin);
rootRouter.route("/diary").patch(_diaryController.patchDiary);
rootRouter.route("/exercise").patch(_exerciseController.patchExercise);
rootRouter.route("/emotion").patch(_emotionController.patchEmotion);
rootRouter.route("/schedule/:id/:category/:month/:date/:index")["delete"](_scheduleController.deleteSchedule);
rootRouter.route("/schedule").post(_scheduleController.postSchedule);
rootRouter.route("/login/:id").get(_userController.getLogin);
rootRouter.route("/month/:id/:month").get(_monthDataController.getMonthData);
rootRouter.route("/photo/:id/:month/:date").post(_middlewares.uploadFiles.single("photoUrl"), _photoUrlController.postPhotoUrl);
var _default = rootRouter;
exports["default"] = _default;