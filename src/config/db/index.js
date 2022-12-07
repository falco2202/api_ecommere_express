import mongoose from "mongoose";

const connect = async() => {
  try {
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/ecommerce',
    );
    console.log('Connected to MongoDB successful');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default {connect}