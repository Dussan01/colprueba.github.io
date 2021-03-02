const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('oh yeah');
    // res.send('Pagina Principal Docentes');
    res.render();

});
router.get('/agregar', (req, res) => {
    // res.send('oh yeah');
    // res.send('Agrega un Docente');
    res.render('docentes/agregar');

});
router.get('/consultar', (req, res) => {
    // res.send('oh yeah');
    // res.send('Consulta un Docente');
    res.render('docentes/consultar');

});
router.get('/eliminar', (req, res) => {
    // res.send('oh yeah');
    // res.send('Elimina un Docente');
    res.render('docentes/eliminar');

});
router.get('/actualizar', (req, res) => {
    // res.send('oh yeah');
    // res.send('Actualiza un Docente');
    res.render('docentes/actualizar');

});
module.exports = router;