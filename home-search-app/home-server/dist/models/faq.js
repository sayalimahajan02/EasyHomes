"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FaqSchema = new _mongoose.default.Schema({
  question: {
    type: String
  },
  answer: {
    type: String
  }
}, {
  // timestamps: true,
  versionKey: false
}); //A virtual property named id will be copied and converted into hexa-decimal string

FaqSchema.virtual('id').get(function () {
  return this._id.toHexString();
}); // Converting the virtual id to JSON

FaqSchema.set('toJSON', {
  virtuals: true
});

const model = _mongoose.default.model('faq', FaqSchema);

var _default = model;
exports.default = _default;