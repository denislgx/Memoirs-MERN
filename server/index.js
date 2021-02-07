import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

// Intitialize app

dotenv.config();
const app = express();

// Middlewares

app.use(bodyParser.json({ limit: '30mb', extended: true })); // limit for images uploads
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

// Database Connection

const PORT = process.env.PORT || 5001;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.CONNECTION_URL, {
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

connectDB();

// Server

app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`.yellow.bold.underline)
);
