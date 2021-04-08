"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import routes from './routes';
// import model from './models';
const app = (0, _express.default)(); //connect to db

_mongoose.default.connect("mongodb://127.0.0.1:27017/homesearchdb", {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("Connected to db!");
});

_mongoose.default.Promise = global.Promise;

_mongoose.default.connection.on('connected', () => {
  console.log('connected to mongo');
});

app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)());
app.use(_express.default.static(_path.default.join(__dirname, 'public'))); // app.use('/', indexRouter);
// app.use('/users', usersRouter);
// routes(app);

var _default = app;
exports.default = _default;