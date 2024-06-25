// db.js
import { Pool } from "pg";

  conn = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  });
  
export default conn ;

// Kindly refer to .env.local file
// # DB_HOST=aws-0-ap-southeast-1.pooler.supabase.com
// # DB_PORT=5432 // Use 5432 for Transaction Mode and 6543 for Connection Pooling Mode
// # DB_USER=postgres.tbkslcihgsdgoiyrglbm
// # DB_PASSWORD=JVMC1VuBwTeXat7p
// # DB_NAME=postgres
