import {Router} from 'express'
import { userRegisteration } from '../controller/users.controller'

const router = Router()

router.route('/')
.post(
    userRegisteration
)



export default router