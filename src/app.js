import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
const exphbs = require('express-handlebars');
const path = require('path');


import { createRoles } from "./lib/inialSetup";

import authRoutes from "././routes/auth.routes";
// import adminRoutes from "./routes/admin.routes";
// import docenteRoutes from "./routes/docente.routes";
// import actividadRoutes from "./routes/actividad.routes";
// import notaRoutes from "./routes/nota.routes";
// import estudianteRoutes from "./routes/estudiantes.routes";





const app = express()
createRoles();
global.__basedir = __dirname;

app.set('pkg', pkg);
app.use(express.json());

app.use(morgan('dev'));

app.get('/infoapi', (req, res) => {
    res.json({
        nombreproyecto: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    // helpers: require('./lib/handlebars'),

}));

//peticiones
app.set('view engine', '.hbs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    next();
});

app.use('/', require('../src/routes/index.routes'));
app.use('/auth', authRoutes);





// APi
app.use('/api/', authRoutes);


// app.use('/api/admin', adminRoutes);
// app.use('/api/docente', docenteRoutes);
// app.use('/api/actividad', actividadRoutes);
// app.use('/api/nota', notaRoutes);
// app.use('/api/estudiante', estudianteRoutes);
//public
app.use(express.static(path.join(__dirname, 'public')));


export default app;