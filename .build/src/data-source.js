var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  AppDataSource: () => AppDataSource
});
var import_config = __toModule(require("dotenv/config"));
var import_reflect_metadata = __toModule(require("reflect-metadata"));
var import_typeorm = __toModule(require("typeorm"));
const USER = process.env["DB_USER"];
const HOST = process.env["DB_HOST"];
const NAME = process.env["DB_NAME"];
const PASS = process.env["DB_PASS"];
const AppDataSource = new import_typeorm.DataSource({
  type: "postgres",
  host: HOST,
  port: 5432,
  username: USER,
  password: PASS,
  database: NAME,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppDataSource
});
//# sourceMappingURL=data-source.js.map
