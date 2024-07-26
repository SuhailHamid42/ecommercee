import express from "express";
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'
// import parth from 'path'               // deployment
// import { fileURLToPath } from "url";


//configure dotenv
dotenv.config();

// database config
connectDB();


// // esmodule fix
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.__dirname(__filename);

//rest object
const app = express()

// middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
// app.use(express.static(path.join(__dirname, './client/build')))       // deployment


//Routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/products", productRoutes)

//rest api
app.get('/', (req, res) => {
    res.send({
        message : 'Welcome to ecommerse app'
    })
})

// deployment
// app.use("*", function(req, res){
// res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
})




