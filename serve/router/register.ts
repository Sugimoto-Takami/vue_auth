// src/routes/register.ts
import express, { Request, Response } from 'express';
import { pool } from '../db';
import bcrypt from 'bcrypt';
import { checkNotAuthenticated } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', checkNotAuthenticated, (req: Request, res: Response) => {
  res.render('register.ejs');
})

router.post('/', checkNotAuthenticated, async (req: Request, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await pool.query('INSERT INTO useruser (id, name, email, password) VALUES ($1, $2, $3, $4)',
        [
            Date.now().toString(),
            req.body.name,
            req.body.email,
            hashedPassword
        ]
        );
        res.redirect('/login');
    } catch (e) {
        console.log("Failure to register", e);
        res.redirect('/register');
    }
})

export  { router };