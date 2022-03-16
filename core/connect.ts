import { Pool } from 'pg';
import config from 'config';

const pool = new Pool({
    user : 'newuser',
    password: 'EZGhnfQ2P',
    database: 'scrooge', 
    host: 'localhost',
    port:5432
});


export default pool;