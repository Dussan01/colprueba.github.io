const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

    res.render('configuraciones/vista_principal')

});




module.exports = router;