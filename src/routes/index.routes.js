const express = require('express');
const router = express.Router();

import * as indexCtrl from "../controllers/index.controller"

router.get('/', indexCtrl.getPricipal)
router.get('/signin', indexCtrl.signin);
router.get('/signup', indexCtrl.signup);

module.exports = router;