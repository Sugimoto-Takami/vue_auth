//  middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';

// Passport.jsによって提供され, reqオブジェクトに追加.
interface RequestWithAuthentication extends Request {
    isAuthenticated(): boolean;
}

function checkAuthenticated (
    req: RequestWithAuthentication,
    res: Response,
    next: NextFunction
    ): void {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

function checkNotAuthenticated(
    req: RequestWithAuthentication,
    res: Response,
    next: NextFunction
    ): void {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}

export { checkAuthenticated, checkNotAuthenticated };