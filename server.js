const express =require("express");
const dotenv=require("dotenv");
const morgan =require("morgan");
const connectDB =require("./config.js/db");
const authRoutes=require("./routes/authRoute");
const categoryRoutes=require("./routes/categoryRoutes");
const productRoutes=require("./routes/productRoutes");
const cors=require("cors");
const path=require("path");

// //configure env
dotenv.config();

// //databse config
connectDB();

// //rest object
const app = express();

// //middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"./client/build")));
// //routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product",productRoutes);

// //rest api
// app.get("/", (req, res) => {
//     res.send("<h1>Welcome to ecommerce app</h1>");
// });
 app.use("*",function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
 })
// //PORT
// const PORT=8080;
const PORT = process.env.PORT || 8080;

// //run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on mode on port ${PORT}`
  )
});
