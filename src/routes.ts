import { Router } from 'express'
import { UsuarioController } from './controllers/UsuarioController'

const routes = Router()

// Rotas Usuarios
routes.post('/usuario', new UsuarioController().create)
routes.get('/usuario', new UsuarioController().list)
routes.get('/usuario/:id_usuario', new UsuarioController().listById)
routes.put('/usuario/:id_usuario', new UsuarioController().update)
routes.delete('/usuario/:id_usuario', new UsuarioController().delete)


export default routes
