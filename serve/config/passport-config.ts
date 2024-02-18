// src/config/passport-config.ts

import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { PassportStatic } from 'passport';
import { getUserByField } from '../data/userService';

interface User {
    id: number;
    email: string;
    password: string;
}

type DoneFunction = (
    error: any, 
    user?: User | false, // ? 空の場合もある.
    options?: { message: string }
  ) => void;

function initialize(
    passport: PassportStatic,
    getUserByField: (
        fieldName: string,
        value: string | number
        ) => Promise<User | null>
        ): void {
    const authenticateUser = async (
        email: string,
        password: string, 
        done: DoneFunction
    ) => {
        const user = await getUserByField('email', email);
        if (user  == null) {
            return done(null, false, {message: 'No user with that email'})
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }
    };

    passport.use(new LocalStrategy({ 
        usernameField : 'email'},
        authenticateUser
        ))

    passport.serializeUser((user: User, done) => done(null, user.id))
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await getUserByField('id', id) as User | null; 
            return done(null, user)
        } catch (error) {
            return done(error);
        }
    });
}

export { initialize };