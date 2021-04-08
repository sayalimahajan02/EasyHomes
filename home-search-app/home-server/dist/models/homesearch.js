"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HomeSchema = new _mongoose.default.Schema({}, {
  // timestamps: true,
  versionKey: false
}); //A virtual property named id will be copied and converted into hexa-decimal string

HomeSchema.virtual('id').get(function () {
  return this._id.toHexString();
}); // Converting the virtual id to JSON

HomeSchema.set('toJSON', {
  virtuals: true
}); // const model = mongoose.model('TodoList', TodoSchema);

const model = _mongoose.default.model('homesearch', HomeSchema);

var _default = model;
exports.default = _default;