import  express  from "express";
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

//Conectar base de datos

db.authenticate()
        .then(()=> console.log('Base de datos conectada'))
        .catch(error=> console.log('hubo un error'));

//Definir puerto

const port =process.env.PORT || 4000;
//habilitar pug

app.set('view engine', 'pug');

//obtener el año

app.use((req,res, next)=>{
    const year = new Date();

    res.locals.actualYear=year.getFullYear();
    res.locals.nombreSitio="Agencia de viajes";

    next();
})
// agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}))
// Definir la carpeta publica

app.use(express.static('public'))
//Agregar router

app.use('/',router);


app.listen(port,()=>{
    console.log(`El servidor esta conectado ene le puerto ${port}`)
})