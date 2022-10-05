"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcionarioRepository = void 0;
const data_source_1 = require("../data-source");
const Funcionario_1 = require("../entities/Funcionario");
exports.funcionarioRepository = data_source_1.AppDataSource.getRepository(Funcionario_1.Funcionario);
