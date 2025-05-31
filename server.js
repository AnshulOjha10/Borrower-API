// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// const app = express();
// const port = process.env.PORT || 4000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // parse JSON body

// // MongoDB connection URI
// const MONGO_URI =
//   "mongodb+srv://anshulojha091:6vaW0gZJgDDzpjVw@borrower.qobvfbr.mongodb.net/?retryWrites=true&w=majority&appName=Borrower";

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Define a Mongoose schema and model
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   residenceType: String,
//   monthlyIncome: Number,
//   previousLoan: Boolean,
//   loanAmount: Number,
//   maritalStatus: String,
//   numberOfDependents: Number,
//   city: String,
//   state: String,
// });

// const User = mongoose.model("User", userSchema);

// // API route to handle signup
// app.post("/api/signup", async (req, res) => {
//   try {
//     const userData = req.body;

//     // Save user to DB
//     const user = new User(userData);
//     await user.save();

//     res.status(201).json({ message: "User signed up successfully" });
//   } catch (error) {
//     console.error("Error saving user:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


import express from "express";
import cors from "cors";
import { connectToDatabase } from "./utils/db.js";
import { User } from "./models/User.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post("/api/signup", async (req, res) => {
  try {
    await connectToDatabase();
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running locally at http://localhost:${port}`);
});
