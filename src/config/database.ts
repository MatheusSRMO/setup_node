// setup for conect mongoose to mongodb
import mongoose from 'mongoose';

const databaseURL = "mongodb://localhost:27017/express-mongo";

export const connect = async () => {
  try {
    await mongoose.connect(databaseURL);
    console.log('Database connected');
  } catch (error) {
    console.log('Database connection failed');
    console.log(error);
  }
};

export const close = async () => {
  await mongoose.connection.close();
};
