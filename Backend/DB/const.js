import mongoose from "mongoose";

// Connecting to the database
const connectDB = async (MONGODB_URI) => {
  try {
    const DB_OPTION = {
      dbname: "BookStore",
    };
    await mongoose.connect(MONGODB_URI, DB_OPTION);
    console.log("Connected successfully");
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

export default connectDB;
