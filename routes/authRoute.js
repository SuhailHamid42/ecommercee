import express from 'express'
import {registerController, loginController, testController, forgotPasswordController, updateProfileController, orderStatusController, getAllOrdersController, getOrdersController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

// router object
const router = express.Router()

//routing
//Register || Method POST
router.post('/register', registerController)

// Login || POST
router.post('/login', loginController)

// Forgot Password || POST
router.post('/forgot-password', forgotPasswordController);


//Test routes
router.get('/test', requireSignIn, isAdmin, testController);

//Protecteed User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ok : true});
})

//Protecteed Admin route auth
router.get("/Admin-auth", requireSignIn, isAdmin,(req, res) => {
    res.status(200).send({ok : true});
})

//UPdate Profile
router.put('/profile', requireSignIn, updateProfileController)

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


export default router
// I am writing this as such
