// src/data/userService.ts

import { pool }  from '../db';

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

async function getUserByField(fieldName: string, value: string | number): Promise<User | null> {
    try {
        const query = `SELECT id, name, email, password FROM useruser WHERE ${fieldName} = $1`;
        const result = await pool.query(query, [value]);
        // 明示的にする (undefinedを返す代わり)
        return result.rows[0] || null;
    } catch (e) {
        console.error('Error occurred:', e);
        return null;
    }
}

export { getUserByField };