import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
//auth
import connDB from './database/db.connect.js';
import bodyParser from 'body-parser';
import authRouter from './routes/authRouter.js';

//main backend
//import 'dotenv/config';
import connectDB from '.main/config/mongodb.js';
import connectCloudinary from '.main/config/cloudinary.js';
import adminRouter from '.main/routes/doctorRoute.js';

//auth backend connections
const app = express();
connDB();

dotenv.config();

app.use(bodyParser.json());

app.use(cors());

app.use('/auth', authRouter);
//app.use('/products', ProductRouter);




//main backend connections

// app config
//const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//app.use(cors())

//api endpoints
app.use('/api/admin', adminRouter)


app.get('/', (req, res)=>{
    res.send('API working')
})

//app.listen(port, ()=>console.log("Server started, port: ", port));
app.listen (process.env.PORT || 4000, () => {
    console.log(`Server is runninng on port ${process.env.PORT}`);
});