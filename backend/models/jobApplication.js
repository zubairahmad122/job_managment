import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  current_salary: {
    type: Number,
    required: true,
  },
  expected_salary: {
    type: Number,
    required: true,
  },
  jobId: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  cv: {
    type: String,
    required: true,
  },
  
  appliedAt: {
    type: Date,
    default: Date.now
  },
  status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' }
});



const jobApplicationModel = mongoose.model.jobApplication || mongoose.model("jobApplication",jobApplicationSchema);


export default jobApplicationModel;
