import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import cors from 'cors'
import jobApplicationRouter from './routes/jobApplicationRouter.js';
import adminPostRouter from './routes/adminPostRoute.js';


// app config 
dotenv.config({ path: './.env' })
const app = express();
const port = process.env.PORT || 4000;



// middleware 
app.use(express.json());
app.use(cors())

// db connection
connectDB();



app.use("/api/v1/images",express.static('uploads'))

app.use("/api/v1/application",jobApplicationRouter)
app.use("/api/v1/adminpost",adminPostRouter)

app.get('/', (req, res) => {
    res.send('Server is Working!')
  })




app.listen(port,(req,res) => {
    console.log(`Server is Start on Port http://localhost:${port}`,);
})

