import { Router } from 'express'
import { getUserDetails, userLogIn, userLogOut, userRegisteration } from '../controller/users.controller.js'
import UserAuthentication from '../middlewares/auth.middleware.js'

const router = Router()

router.route('/register')
    .post(
        userRegisteration
    )
router.route('/login')
    .post(
        userLogIn
    )
router.route('/logout')
    .post(
        UserAuthentication,
        userLogOut
    )

router.route('/user-info')
    .get(
        UserAuthentication,
        getUserDetails
    )

export default router