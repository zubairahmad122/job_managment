import express from 'express'
import { createJobPost, deleteJobPost, getAllJobPosts, getSingleJobPost, listJobApplicationsByPosition, updateJobPost } from '../controllers/adminJobApplicatiomController.js';


const adminPostRouter = express.Router();

adminPostRouter.get("/getalljobposts",getAllJobPosts)
adminPostRouter.post("/getsinglejobpost/:id",getSingleJobPost)
adminPostRouter.post("/createjobpost",createJobPost)
adminPostRouter.post("/removejobpost/:id",deleteJobPost)
adminPostRouter.post("/updatejobpost/:id",updateJobPost)
adminPostRouter.get("/getByPositions/:position",listJobApplicationsByPosition)




export default adminPostRouter;