import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     console.log("CONNECTING USING:", process.env.MONGO_URI); // 👈
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(`❌ MongoDB Connection Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// //password tjMkTGKkTvkxpnox
