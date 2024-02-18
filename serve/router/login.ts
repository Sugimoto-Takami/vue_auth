// src/routes/login.ts
import express, { Request, Response } from 'express';
import passport from 'passport';
import { checkNotAuthenticated } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', checkNotAuthenticated, (req: Request, res: Response) => {
  res.render('login.ejs');
});

router.post('/', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

export { router };