// src/app.ts
import express, { Express } from 'express';
import session from 'express-session';
import flash from 'express-flash';
import methodOverride from 'method-override';
import path from 'path';
import passport from 'passport';

// ルートモジュールのインポート
// import { router } from './routes/index';
// import { router as registerRouter } from './routes/register';
// import { router as loginRouter } from './routes/login';

// Passportの設定
import  { initialize as initializePassport } from './config/passport-config';
import { pool } from './db';
import { getUserByField } from './data/userService';

const app: Express = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended : false} ));
app.use(session({
    secret: process.env.SESSION_SECRET || `secret`, 
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(methodOverride('_method'));

app.use(passport.initialize());
app.use(passport.session());

initializePassport(passport, getUserByField);

// app.use('/', router);
// app.use('/register', registerRouter);
// app.use('/login', loginRouter);

export { app };