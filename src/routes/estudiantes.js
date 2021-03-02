const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('oh yeah');
    res.render('layouts/main')

});
router.get('/agregar', (req, res) => {
    // res.send('oh yeah');
    res.render('estudiantes/agregar');

});
router.get('/consultar', (req, res) => {
    // res.send('oh yeah');
    res.render('estudiantes/consultar');

});
router.get('/eliminar', (req, res) => {
    // res.send('oh yeah');
    res.render('estudiantes/eliminar');
    // res.send('Elimina un Estudiante');

});
router.get('/actualizar', (req, res) => {
    // res.send('oh yeah');
    res.render('estudiantes/actualizar');
    // res.render('Actualiza un Estudiante');

});
module.exports = router;