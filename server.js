import express from 'express'
import router from './router/router.js'
import routerRutasNoAsignadas from './router/routerRutasNoAsignadas.js'

const app = express()

app.use(express.json())
//Las siguientes dos las dejo, por si llego a armar un formulario de ingreso
app.use(express.urlencoded({extended: true}))
//Como el Saludo debía ir en la ruta raíz... puse el formulario de carga en /carga
app.use('/carga', express.static('public'))

app.use('/', new router().start())
app.use('/*', new routerRutasNoAsignadas().start())

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))