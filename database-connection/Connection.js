// Import packages using ES module syntax
import mongoose from "mongoose";
import 'dotenv/config';

//

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MANGOS);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Database connection error:", error);
    process.exit(1); // stop app if DB fails
  }
};
export default connectDB;