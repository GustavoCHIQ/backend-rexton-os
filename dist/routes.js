"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = require("./controllers/UsuarioController");
const ClienteController_1 = require("./controllers/ClienteController");
const routes = (0, express_1.Router)();
// Rotas Usuarios
routes.post('/usuario', new UsuarioController_1.UsuarioController().create);
routes.get('/usuario', new UsuarioController_1.UsuarioController().findAll);
routes.get('/usuario/:id_usuario', new UsuarioController_1.UsuarioController().findById);
routes.put('/usuario/:id_usuario', new UsuarioController_1.UsuarioController().update);
routes.delete('/usuario/:id_usuario', new UsuarioController_1.UsuarioController().delete);
routes.post('/cliente', new ClienteController_1.ClienteController().create);
routes.get('/cliente', new ClienteController_1.ClienteController().findAll);
routes.get('/cliente:id_cliente', new ClienteController_1.ClienteController().findById);
routes.put('/cliente:id_cliente', new ClienteController_1.ClienteController().update);
routes.delete('/cliente', new ClienteController_1.ClienteController().delete);
exports.default = routes;
