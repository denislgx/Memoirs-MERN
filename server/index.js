import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import colors from 'colors';

import { MONGO_URI } from './consts.js';

// Intitialize app

const app = express();

// Middlewares

app.use(bodyParser.json({ limit: '30mb', extended: true })); // limit for images uploads
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Database Connection

const PORT = process.env.port || 5000;

const connectB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(
      `MongoDB connected: ${connection.connection.host}`.cyan.underline.bold
    );

    mongoose.set('useFindAndModify', false); // no warnings in the console
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1); // 1 = Uncaught Fatal Exception
  }
};

connectB();

// Server

app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`.yellow.bold.underline)
);
