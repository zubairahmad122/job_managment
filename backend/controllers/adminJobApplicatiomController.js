import adminJobPostModel from "../models/adminJobApplicationModel.js";
import jobApplicationModel from "../models/jobApplication.js";



// GET all job posts
export const getAllJobPosts = async (req, res) => {
  try {
    const jobPosts = await adminJobPostModel.find();
    res.json({ success: true, data: jobPosts });
   
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Failed to fetch job posts" });
  }
};

// GET a specific job post by ID
export const getSingleJobPost = async (req, res) => {
  const { id } = req.params;

  try {
    const jobPost = await adminJobPostModel.findById(id);
    if (!jobPost) {
      return res.json({success:false, message: 'Job post not found' });
    }
    res.json({ success: true, data: jobPost });
  } catch (error) {
    res.json({success: false,message: error.message });
  }
};

// CREATE a new job post
export const createJobPost = async (req, res) => {
  const jobPost = req.body;


  try {
    const newJobPost = await adminJobPostModel.create(jobPost);
    res.json({ success: true, data: newJobPost });
  } catch (error) {
    console.log(error) 
    res.json({ success: false, message: "failed to post job" });
  }
};

// UPDATE a job post by ID
export const updateJobPost= async (req, res) => {
  const { id } = req.params;
  const { category, position_title, timings, department, Position_Purpose, experience, responsibilities, requirements } = req.body;

  try {
    const updatedJobPost = await adminJobPostModel.findByIdAndUpdate(id, { category, position_title, timings, department, Position_Purpose, experience, responsibilities, requirements }, { new: true });
    if (!updatedJobPost) {
      return res.json({success:false, message: 'Job post not found' });
    }
    res.json({ success: true, message: "job updated successfuly" });
  } catch (error) {
    res.json({ success: false, message: "Failed to update job post" });
  }
};

// DELETE a job post by ID
export const deleteJobPost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedJobPost = await adminJobPostModel.findByIdAndDelete(id);
    if (!deletedJobPost) {
      return res.json({success:true, message: 'Job post not found' });
    }
    res.json({success:true, message: 'Job post deleted successfully' });
  } catch (error) {
    res.json({success:false,message: error.message });
  }
};


// List Job Applications by Position
export const listJobApplicationsByPosition = async (req, res) => {
  let { position } = req.params;
  position = position.charAt(0).toUpperCase() + position.slice(1).toLowerCase();
  try {
    const jobApplications = await jobApplicationModel.find({ position: position });
    res.json({ success: true, data: jobApplications });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to retrieve job applications" });
  }
};
