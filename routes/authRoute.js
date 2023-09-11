const express=require("express");
const {registerController,loginController,testController, forgotPasswordController}=require("../controllers/authController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test",requireSignIn , isAdmin, testController);

//forgot password
router.post('/forgot-password',forgotPasswordController);

// protected route auth 
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

//protected admin route
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})
module.exports=router;
