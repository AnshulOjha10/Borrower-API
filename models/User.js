import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  residenceType: String,
  monthlyIncome: Number,
  previousLoan: Boolean,
  loanAmount: Number,
  maritalStatus: String,
  numberOfDependents: Number,
  city: String,
  state: String,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
