import { connectToDatabase } from "../utils/db.js";
import { User } from "../models/User.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectToDatabase();
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
