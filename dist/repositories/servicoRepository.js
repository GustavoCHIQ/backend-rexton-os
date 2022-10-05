"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicoRepository = void 0;
const data_source_1 = require("../data-source");
const Servico_1 = require("../entities/Servico");
exports.servicoRepository = data_source_1.AppDataSource.getRepository(Servico_1.Servico);
