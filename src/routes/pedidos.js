const express = require('express');
const router = express.Router();

router.get('/', async(req, res) =>{
    res.render('pedidos/principal');
});
router.get('/agregar', async(req, res) =>{
    res.render('pedidos/agregar_pedidos');
});
router.get('/ver_pedidos', async(req, res) =>{
    res.render('pedidos/ver_pedidos');
});

module.exports = router;