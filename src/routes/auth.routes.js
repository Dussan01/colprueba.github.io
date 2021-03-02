import { Router } from "express";
const router = Router();
import * as authCtrl from "../controllers/auth.controller";


router.post('/signup', authCtrl.signup)
router.post('/signin', authCtrl.signin)

router.post('/auth/signup', authCtrl.signupJson)
router.post('/auth/signin', authCtrl.signinJson)
export default router;