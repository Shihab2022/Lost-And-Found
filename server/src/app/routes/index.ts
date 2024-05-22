import { Router } from "express";
import { AuthRoute } from "../modules/auth/auth.route";
import { UserController } from "../modules/user/user.controller";
import { CategoryController } from "../modules/CategoryItem/Category.controller";
import { AuthController } from "../modules/auth/auth.controller";
import auth from "../middlewares/auth";
import validateRequest from "../middlewares/validateRequest";
import { userValidation } from "../modules/user/user.validation";
import { categoryValidation } from "../modules/CategoryItem/category.validation";




const router = Router()

router.post('/register', UserController.createUser)
router.post('/login', AuthController.loginUser)
router.post('/found-item-categories', auth(), CategoryController.createCategory)
router.post('/found-items', auth(), CategoryController.createFoundItem)
router.get('/found-items', CategoryController.getFoundItem)
router.post('/claims', auth(), CategoryController.createClaim)
router.get('/claims', auth(), CategoryController.getClaim)
router.put('/claims/:claimId', auth(), validateRequest(categoryValidation.updateClaimStatus), CategoryController.updateClaimStatus)
router.get('/my-profile', auth(), UserController.getMyProfileInfo)
router.put('/my-profile', auth(), validateRequest(userValidation.updateProfile), UserController.updateProfileInfo)

export const rootRouter = router