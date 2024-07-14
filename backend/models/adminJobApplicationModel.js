import mongoose from "mongoose";

const adminJobPostSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  position_title: {
    type: String,
    required: true,
  },
  timings: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  Position_Purpose: {
    type: String,
    required: true,
  },
  experience: {
    type: [String],  // Array of strings for experience
    required: true,
  },
  responsibilities: {
    type: [String],  // Array of strings for responsibilities
    required: false,
  },
  requirements: {
    type: [String],  // Array of strings for requirements
    required: false,
  },
  workexperience: {
    type: String,  // Array of strings for requirements
    required: false,
  },
  postAt: {
    type: Date,
    default: Date.now
  },

});

// Define and export the model correctly
const adminJobPostModel = mongoose.model.adminJobPost || mongoose.model("adminJobPost", adminJobPostSchema);
export default adminJobPostModel;
