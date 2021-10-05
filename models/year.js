import mongoose from "mongoose";

const yearSchema = mongoose.Schema({
  year: { type: Number, required: true },
  students: { type: Number, required:  true },
  id: { type: String },
});

export default mongoose.model("year", yearSchema);