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
router.post('/lost-items', auth(), CategoryController.createLostItem)
router.get('/found-items', CategoryController.getFoundItem)
router.get('/category', CategoryController.getCategory)
router.post('/claims', auth(), CategoryController.createClaim)
router.get('/claims', auth(), CategoryController.getClaim)
router.put('/claims/:claimId', auth(), validateRequest(categoryValidation.updateClaimStatus), CategoryController.updateClaimStatus)
router.get('/my-profile', auth(), UserController.getMyProfileInfo)
router.put('/my-profile', auth(), UserController.updateProfileInfo)
router.get('/users', UserController.getAllUser)
router.delete('/user', UserController.deleteUser)
router.put('/user', UserController.updateStatus)
router.get('/myLostItem', auth(), CategoryController.myLostItem)
router.get('/myFoundItem', auth(), CategoryController.myFoundItem)
router.get('/myClaim', CategoryController.myClaimItem)

export const rootRouter = router