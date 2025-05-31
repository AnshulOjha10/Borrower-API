import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://anshulojha091:6vaW0gZJgDDzpjVw@borrower.qobvfbr.mongodb.net/?retryWrites=true&w=majority&appName=Borrower";

export const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) return; // already connected
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};
