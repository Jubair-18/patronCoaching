import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required:  false},
  fname: { type: String, required:  false },
  lname: { type: String, required:  false },
  phoneNumber: { type: String, required:  true },
  address: { type: String, required:  true },
  classB: { type: Number, required:  true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);