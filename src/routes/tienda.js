const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/', async(req, res) => {
    // res.send('oh yeah');
    // res.send('layouts/main')
    const datos1 = await pool.query('select * from productos');
    console.log(datos1);
    res.render('tienda/ver_productos', { datos1 });

});
router.post('/agregar', async(req, res) => {
    // res.send('oh yeah');
    // res.send('layouts/main')
    await pool.query('insert into productos set ?', [req.body]);
    res.redirect('/tienda/');

});
router.get('/pedido', async(req, res) => {
    // res.send('oh yeah');
    // res.send('layouts/main')
    // await pool.query('insert into productos set ?', [req.body]);
    // res.render('tienda/ver_productos');



    const datos = await pool.query('select * from pedido');
    const producto = await pool.query('select * from productos');
    const usuario = await pool.query('select * from usuarios');


    res.render('tienda/agregar_pedido', { usuario, producto, datos });
});

router.post('/pedido', async(req, res) => {
    // res.send('oh yeah');
    // res.send('layouts/main')
    const pd = await pool.query('select * from productos');
    console.log(pd);
    console.log(req.body.cantidad);
    total = req.body.cantidad
    console.log()

    await pool.query('insert into pedido set ?', [req.body]);
    res.redirect('pedido');

});

module.exports = router;