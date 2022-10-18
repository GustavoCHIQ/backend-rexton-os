import { Router } from 'express'
import { UsuarioController } from './controllers/UsuarioController'
import { ClienteController } from './controllers/ClienteController'
import { FuncionarioController } from './controllers/FuncionarioController'

const routes = Router()

// Rotas Usuarios
routes.post('/usuario', new UsuarioController().create)
routes.get('/usuario', new UsuarioController().findAll)
routes.get('/usuario/:id_usuario', new UsuarioController().findById)
routes.put('/usuario/:id_usuario', new UsuarioController().update)
routes.delete('/usuario/:id_usuario', new UsuarioController().delete)
routes.post('/usuario/:id_usuario', new UsuarioController().updatePass)

routes.post('/cliente', new ClienteController().create)
routes.get('/cliente', new ClienteController().findAll)
routes.get('/cliente/:id_cliente', new ClienteController().findById)
routes.put('/cliente/:id_cliente', new ClienteController().update)
routes.delete('/cliente/:id_cliente', new ClienteController().delete)

routes.post('/funcionario', new FuncionarioController().create)
routes.get('/funcionario', new FuncionarioController().findAll)
routes.get('/funcionario/:id_funcionario', new FuncionarioController().findById)
routes.put('/funcionario/:id_funcionario', new FuncionarioController().update)
routes.delete('/funcionario/:id_funcionario', new FuncionarioController().delete)

export default routes
