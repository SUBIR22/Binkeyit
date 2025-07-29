import express from 'express';
import { forgotPasswordController, loginController, logoutController,  refreshToken,  registerUserController, resetPassword, updateUserDetails, uploadAvatar, verifyForgotPasswordOtp } from '../controllers/user.controller.js';
import { verifyEmailController } from '../controllers/user.controller.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/multer.js'; 

const userRouter = express.Router();

userRouter.post('/register',registerUserController);
userRouter.post('/verify_email',verifyEmailController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)
userRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadAvatar)
userRouter.put('/update-user',auth,updateUserDetails)
userRouter.put('/forgot-password',forgotPasswordController)
userRouter.put('/verify-forgot-password-otp',verifyForgotPasswordOtp)
userRouter.put('/reset-password',resetPassword)
userRouter.post('/refresh-token',refreshToken)


export default userRouter;