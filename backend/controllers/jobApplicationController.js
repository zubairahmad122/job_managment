import adminJobPostModel from "../models/adminJobApplicationModel.js";
import jobApplicationModel from "../models/jobApplication.js";
import fs from "fs";

const addJobApplication = async (req, res) => {
  const image_filename = req.files["image"][0].filename;
  const pdfFilename = req.files["pdf"][0].filename;
  let CapPosition = req.body.position;
  CapPosition = CapPosition.charAt(0).toUpperCase() + CapPosition.slice(1).toLowerCase();


  const application = new jobApplicationModel({
    name: req.body.name,
    email: req.body.email,
    position: CapPosition,
    phone_number: req.body.phoneNumber,
    current_salary: req.body.currentSalary,
    expected_salary: req.body.expectedSalary,
    jobId: req.body.id,
    image: image_filename,
    cv: pdfFilename,
  });
  try {
    await application.save();
    res.json({ success: true, message: "We received your application successfully. Our team will contact you within 24 hours." });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to submit job application" });
  }
};

const listJobApplication = async (req, res) => {
  try {
    const listApplications = await jobApplicationModel.find();
    res.json({ success: true, data: listApplications });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to fetch applications" });
  }
};

const removeJobApplication = async (req, res) => {
  const id = req.body.id;
  try {
    const application = await jobApplicationModel.findById(id);
    if (application) {
      fs.unlink(`uploads/${application.image}`, () => {});
      fs.unlink(`uploads/${application.cv}`, () => {});
      await jobApplicationModel.findByIdAndDelete(id);
      res.json({ success: true, message: "Application deleted successfully" });
    } else {
      res.json({ success: false, message: "job Application id not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to delete Application" });
  }
};

const acceptJobApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const jobApplication = await jobApplicationModel.findById(id);
    if (!jobApplication) {
      return res.json({ success: false, message: "Job application not found" });
    }

    jobApplication.status = "Accepted";
    await jobApplication.save();

    res.json({
      success: true,
      message: `Job application Accepted successfully`,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `Failed to Accepted job application` });
  }
};

const rejectJobApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const jobApplication = await jobApplicationModel.findById(id);
    if (!jobApplication) {
      return res.json({ success: false, message: "Job application not found" });
    }

    jobApplication.status = "Rejected";
    await jobApplication.save();

    res.json({
      success: true,
      message: `Job application Rejected successfully`,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `Failed to Rejected job application` });
  }
};

// Get Accepted Job Applications
const getAcceptedApplications = async (req, res) => {
  try {
    const acceptedApplications = await jobApplicationModel.find({
      status: "Accepted",
    });
    res.json({ success: true, data: acceptedApplications });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve accepted job applications",
      });
  }
};

// Get Rejected Job Applications
const getRejectedApplications = async (req, res) => {
  try {
    const rejectedApplications = await jobApplicationModel.find({
      status: "Rejected",
    });
    res.json({ success: true, data: rejectedApplications });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve rejected job applications",
      });
  }
};


const getApplicationByPost = async (req, res) => {
  const jobId = req.body.id; // Assuming the jobId is sent in the request body as 'id'
  
  try {
    const applicationByPost = await jobApplicationModel.find({jobId});
    
    res.json({ success: true, data: applicationByPost });
  } catch (error) {
    console.error("Failed to Get job applications By Post:", error);
    res.status(500).json({
      success: false,
      message: "Failed to Get job applications By Post",
      error: error.message // Optional: Send error message for debugging
    });
  }
};



// GET a specific job post by ID
const getSingleApplication = async (req, res) => {
  const { id } = req.params;


  const application = await adminJobPostModel.findById(id);
  try {
    if (!application) {
      return res.json({success:false, message: 'Job post not found' });
    }
    res.json({ success: true, data: application });
  } catch (error) {
    res.json({success: false,message: error.message });
  }
};

export {
  addJobApplication,
  listJobApplication,
  removeJobApplication,
  acceptJobApplication,
  rejectJobApplication,
  getAcceptedApplications,
  getRejectedApplications,
  getSingleApplication,
  getApplicationByPost
};
