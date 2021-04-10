"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserAccountSchema = new _mongoose.default.Schema({
  emailId: {
    type: String,
    required: "email id is a required property"
  },
  password: {
    type: String,
    required: "Password is a required property"
  }
}, {
  // timestamps: true,
  versionKey: false
}); //A virtual property named id will be copied and converted into hexa-decimal string

UserAccountSchema.virtual('id').get(function () {
  return this._id.toHexString();
}); // Converting the virtual id to JSON

UserAccountSchema.set('toJSON', {
  virtuals: true
});

const model = _mongoose.default.model('useraccount', UserAccountSchema);

var _default = model;
exports.default = _default;