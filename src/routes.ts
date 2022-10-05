import { Router } from 'express'
import { UsuarioController } from './controllers/UsuarioController'
import { ClienteController } from './controllers/ClienteController'

const routes = Router()

// Rotas Usuarios
routes.post('/usuario', new UsuarioController().create)
routes.get('/usuario', new UsuarioController().findAll)
routes.get('/usuario/:id_usuario', new UsuarioController().findById)
routes.put('/usuario/:id_usuario', new UsuarioController().update)
routes.delete('/usuario/:id_usuario', new UsuarioController().delete)

routes.post('/cliente', new ClienteController().create)
routes.get('/cliente', new ClienteController().findAll)
routes.get('/cliente:id_cliente', new ClienteController().findById)
routes.put('/cliente:id_cliente', new ClienteController().update)
routes.delete('/cliente', new ClienteController().delete)

export default routes
