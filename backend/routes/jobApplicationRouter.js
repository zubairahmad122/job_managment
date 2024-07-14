import express from 'express'
import { acceptJobApplication, addJobApplication, getAcceptedApplications, getApplicationByPost, getRejectedApplications, getSingleApplication, listJobApplication, rejectJobApplication, removeJobApplication, } from '../controllers/jobApplicationController.js';
import multer from 'multer';



const jobApplicationRouter = express.Router();
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({storage:storage});

const uploadFiles = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]);

jobApplicationRouter.post('/apply', uploadFiles, addJobApplication);
jobApplicationRouter.get('/list',listJobApplication);
jobApplicationRouter.post('/getsingleapplication/:id',getSingleApplication);
jobApplicationRouter.post('/remove',removeJobApplication); 
jobApplicationRouter.put('/accept/:id',acceptJobApplication); 
jobApplicationRouter.put('/reject/:id',rejectJobApplication); 
jobApplicationRouter.get('/accept',getAcceptedApplications); 
jobApplicationRouter.get('/reject',getRejectedApplications); 
jobApplicationRouter.post('/applicationbypost',getApplicationByPost); 

export default jobApplicationRouter;
