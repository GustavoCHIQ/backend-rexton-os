import { Router } from 'express'
import { UsuarioController } from './controllers/UsuarioController'
import { ClienteController } from './controllers/ClienteController'
import { FuncionarioController } from './controllers/FuncionarioController'
import { ServicoController } from './controllers/ServicoController'
import { OrdemDeServicoController } from './controllers/OrdemDeServicoController'

const routes = Router()

// Rotas Usuarios
routes.post('/usuario', new UsuarioController().create)
routes.get('/usuario', new UsuarioController().findAll)
routes.get('/usuario/:id_usuario', new UsuarioController().findById)
routes.put('/usuario/:id_usuario', new UsuarioController().update)
routes.delete('/usuario/:id_usuario', new UsuarioController().delete)
routes.post('/usuario/:id_usuario', new UsuarioController().updatePass)

// Rotas Clientes
routes.post('/cliente', new ClienteController().create)
routes.get('/cliente', new ClienteController().findAll)
routes.get('/cliente/:id_cliente', new ClienteController().findById)
routes.put('/cliente/:id_cliente', new ClienteController().update)
routes.delete('/cliente/:id_cliente', new ClienteController().delete)

// Rotas Funcionarios
routes.post('/funcionario', new FuncionarioController().create)
routes.get('/funcionario', new FuncionarioController().findAll)
routes.get('/funcionario/:id_funcionario', new FuncionarioController().findById)
routes.put('/funcionario/:id_funcionario', new FuncionarioController().update)
routes.delete('/funcionario/:id_funcionario', new FuncionarioController().delete)

// Rotas Servicos
routes.post('/servico', new ServicoController().create)
routes.get('/servico', new ServicoController().findAll)
routes.get('/servico/:id_servico', new ServicoController().findById)
routes.put('/servico/:id_servico', new ServicoController().update)
routes.delete('/servico/:id_servico', new ServicoController().delete)

// Rotas Ordem De Servicos
routes.post('/ordemdeservico/', new OrdemDeServicoController().create)
routes.put('/ordemdeservico/:id_os', new OrdemDeServicoController().changeStatus)
routes.get('/ordemdeservico/', new OrdemDeServicoController().findAll)
routes.get('/ordemdeservico/:id_os', new OrdemDeServicoController().findById)
routes.get('/ordemdeservico/data/:data', new OrdemDeServicoController().findByData)
routes.put('/ordemdeservico/:id_os', new OrdemDeServicoController().update)
routes.delete('/ordemdeservico/:id_os', new OrdemDeServicoController().delete)


export default routes
