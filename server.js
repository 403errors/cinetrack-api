/**
 * @module server
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD);

/**
 * Handle uncaught exceptions globally.
 * Logs the error and shuts down the process.
 */
process.on('uncaughtException', (err) => {
  console.error(err.name, err.message);
  console.error('UNHANDLED EXCEPTION! 🔴 Shutting down...');
  process.exit(1);
});

mongoose.connect(DB).then(() => {
  console.log('DB connection established...');
}).catch(err => {
  console.error('DB connection error:', err.message);
  process.exit(1);
});

import app from './app.js';

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

/**
 * Handle unhandled promise rejections globally.
 * Logs the error and shuts down the server gracefully.
 */
process.on('unhandledRejection', (err) => {
  console.error(err.name, err.message);
  console.error('UNHANDLED PROMISE REJECTION! 🔴 Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});