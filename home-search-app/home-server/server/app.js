import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
// import routes from './routes';
// import model from './models';

const app = express();

//connect to db
mongoose.connect("mongodb+srv://admin:admin@cluster0.lvmbi.mongodb.net/test?authSource=admin&replicaSet=atlas-8zorfc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("Connected to db!");
});
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// routes(app);

export default app;
