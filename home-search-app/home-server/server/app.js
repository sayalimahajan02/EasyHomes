import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import routes from './routes';
import cors from 'cors';
// import model from './../server/models';

const app = express();

//cloud connect to mongo db
mongoose.connect("mongodb+srv://admin:admin@cluster0.lvmbi.mongodb.net/homeSearch?authSource=admin&replicaSet=atlas-8zorfc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
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

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
routes(app);

export default app;
