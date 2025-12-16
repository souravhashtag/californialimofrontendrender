/*
  Seed script to insert a demo user into MongoDB.
  Usage:
    1. Add MONGODB_URI to your .env (mongodb+srv://... or mongodb://...) or export it in env.
    2. Run `npm install` to install dependencies (mongodb, bcryptjs, dotenv).
    3. Run `npm run seed:user` or `node scripts/seed-demo-user.js`.

  The script will skip insertion if the demo email already exists.
*/

const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || process.env.NEXT_PUBLIC_MONGODB_DB || 'test';

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI is not set in environment. Add it to your .env as MONGODB_URI.');
  process.exit(1);
}

const DEMO_EMAIL = process.env.DEMO_USER_EMAIL || 'demo@californialimo.test';
const DEMO_PASSWORD = process.env.DEMO_USER_PASSWORD || 'DemoPass123!';

async function run() {
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const users = db.collection('users');

    const existing = await users.findOne({ email: DEMO_EMAIL });
    if (existing) {
      console.log(`Demo user already exists: ${DEMO_EMAIL}`);
      console.log('If you want to recreate it, remove it first from the database and re-run this script.');
      return;
    }

    const passwordHash = await bcrypt.hash(DEMO_PASSWORD, 10);

    const now = new Date();
    const userDoc = {
      email: DEMO_EMAIL,
      passwordHash,
      role: 'admin',
      createdAt: now,
      updatedAt: now,
      // add other fields here to match your app's user schema
    };

    const res = await users.insertOne(userDoc);
    console.log('Inserted demo user with id:', res.insertedId.toString());
    console.log('Credentials:');
    console.log('  email:', DEMO_EMAIL);
    console.log('  password:', DEMO_PASSWORD);
    console.log('\nIMPORTANT: Change the demo password after first login.');
  } catch (err) {
    console.error('Failed to insert demo user:', err);
    process.exitCode = 1;
  } finally {
    await client.close();
  }
}

run();
