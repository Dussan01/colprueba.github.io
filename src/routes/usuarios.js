const express = require('express');
const router = express.Router();
const pool = require('../database');
router.get('/', async(req, res) => {
    // res.send('oh yeah');
    // res.send('Pagina Principal usuario');
    const datos = await pool.query('select * from usuarios');
    res.render('usuarios/view_usuarios', { datos })

});
router.get('/agregar', (req, res) => {
    // res.send('oh yeah');
    res.render('usuarios/agregar');

});
router.post('/agregar', async(req, res) => {
    await pool.query('insert into usuarios set ?', [req.body]);
    res.redirect('/usuarios');

});
router.get('/consultar', (req, res) => {
    // res.send('oh yeah');

    res.render('usuarios/consultar');

});
router.get('/eliminar', (req, res) => {
    // res.send('oh yeah');
    res.render('usuarios/eliminar');

});
router.get('/actualizar', (req, res) => {
    res.render('usuarios/actualizar');
    // res.send('oh yeah');

});
router.get('/eliminar/:id_usuario', async(req, res) => {
    const { id_usuario } = req.params;

    await pool.query('DELETE FROM usuarios where id_usuario = ?', [id_usuario]);

    res.redirect('/usuarios');
    // res.send('oh yeah');

});
router.post('/modificar/:id_usuario', async(req, res) => {
    const { id_usuario } = req.params;

    await pool.query('UPDATE usuarios set ? where id_usuario = ?', [req.body, id_usuario]);

    res.redirect('/usuarios');
    // res.send('oh yeah');

});
module.exports = router;