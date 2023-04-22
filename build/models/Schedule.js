"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var scheduleSchema = new _mongoose["default"].Schema({
  category: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  importance: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  who: {
    type: String,
    required: true
  }
});
var Schedule = _mongoose["default"].model("Schedule", scheduleSchema);
var _default = Schedule;
exports["default"] = _default;