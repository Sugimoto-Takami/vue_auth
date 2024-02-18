// src/bin/www.ts
import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    config();
}

import { app } from '../app';

if (process.env.NODE_ENV !== 'test') {
    app.listen(3000, () => 
        console.log('Server started on port 3000'));
}
