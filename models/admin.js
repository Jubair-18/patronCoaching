import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  name: { type: String, required: true },
  degree: { type: String, required:  true },
  number: { type: String, required:  true },
  id: { type: String },
});

export default mongoose.model("admin", adminSchema);