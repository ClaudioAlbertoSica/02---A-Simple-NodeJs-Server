import express from 'express'
import router from './router/router.js'
import routerForNonAssignedRoutes from './router/routerForNonAssignedRoutes.js'

const app = express()

//Adding middleware to parse Json (mainly for testing this with PostMan)
app.use(express.json())
//Adding middleware to parse url-encoded requests from Forms
app.use(express.urlencoded({extended: true}))
//There is a Form to add words to this
app.use('/carga', express.static('public'))

app.use('/', new router().start())
app.use('/*', new routerForNonAssignedRoutes().start())

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Express Server Listening at http://localhost:${PORT}`))
server.on('error', error => console.log(`Server Error: ${error.message}`))