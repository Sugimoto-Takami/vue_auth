// src/routes/index.ts
import express, { Request, Response } from 'express';
import { checkAuthenticated } from '../middleware/authMiddleware';

const router = express.Router();

/*
interface UserRequest extends Request {
  user?: { name: string; id: number };
}
*/

router.get('/',checkAuthenticated,(req: Request, res: Response) => {
  res.render('index.ejs'/*, {name : req.user.name, id: req.user.id }*/)
})

router.delete('/logout', (req: Request, res: Response) => {
    req.logout(() => { 
        res.redirect('/login');
    })
});

export { router };