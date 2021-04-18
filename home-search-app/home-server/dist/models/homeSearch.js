"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PropertySchema = new _mongoose.default.Schema({
  propertyId: {
    type: Number,
    required: "Property ID cannot be null."
  },
  propertyName: {
    type: String
  },
  propertyDesc: {
    type: String
  },
  propertyType: {
    type: String
  },
  propertySqftArea: {
    type: String
  },
  propertyPrice: {
    type: Number
  },
  propertyStreet: {
    type: String
  },
  propertyCity: {
    type: String
  },
  propertyState: {
    type: String
  },
  propertyZipcode: {
    type: Number
  },
  propertyBuildDate: {
    type: Date,
    default: Date.now
  },
  seller: {
    type: Object
  },
  buyer: {
    type: Object
  },
  selectedImages: {
    type: Array
  }
}, {
  versionKey: false
}); //A virtual property named id will be copied and converted into hexa-decimal string

PropertySchema.virtual('id').get(function () {
  return this._id.toHexString();
}); // Converting the virtual id to JSON

PropertySchema.set('toJSON', {
  virtuals: true
}); // const model = mongoose.model('TodoList', TodoSchema);

const model = _mongoose.default.model('property', PropertySchema);

var _default = model;
exports.default = _default;