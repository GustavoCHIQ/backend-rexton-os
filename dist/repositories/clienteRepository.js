"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRepository = void 0;
const data_source_1 = require("../data-source");
const Cliente_1 = require("../entities/Cliente");
exports.clienteRepository = data_source_1.AppDataSource.getRepository(Cliente_1.Cliente);
