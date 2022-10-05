"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordemDeServicoRepository = void 0;
const data_source_1 = require("../data-source");
const OrdemDeServico_1 = require("../entities/OrdemDeServico");
exports.ordemDeServicoRepository = data_source_1.AppDataSource.getRepository(OrdemDeServico_1.OrdemDeServico);
