import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (errors) {
    console.log(errors);
    process.exit(1);
  }
};

export default connectDB;
