import express from "express"

const router = express.Router();

// router.post('/login', validateRequest(AuthValidation.loginValidationSchema), AuthControllers.LoginUser)

// router.post('/refresh-token', validateRequest(AuthValidation.refreshValidationSchema), AuthControllers.refreshToken)

// router.post('/change-password', auth(USER_ROLE.admin, USER_ROLE.student, USER_ROLE.faculty), validateRequest(AuthValidation.changePasswordValidationSchema), AuthControllers.changePassword)

export const AuthRoute = router