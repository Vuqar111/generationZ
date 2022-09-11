import mongoose from "mongoose";

const agroSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Agro = mongoose.model("Agro", agroSchema);
export default Agro;
