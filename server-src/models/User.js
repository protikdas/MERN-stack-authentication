import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true },
  age: { type: Number },
  country: { type: String, required: true },
  password: { type: String, required: true }
});

export default mongoose.model("User", schema);
