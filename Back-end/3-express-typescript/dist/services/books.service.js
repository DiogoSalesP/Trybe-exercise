"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const book_model_1 = __importDefault(require("../models/book.model"));
const restify_errors_1 = require("restify-errors");
class BookService {
    constructor() {
        this.model = new book_model_1.default(connection_1.default);
    }
    validatePropertites(book) {
        const properties = ['title', 'price', 'author', 'isbn'];
        for (let index = 0; index < properties.length; index += 1) {
            if (!Object.prototype.hasOwnProperty.call(book, properties[index])) {
                return [false, properties[index]];
            }
        }
        return [true, null];
    }
    validateValues(book) {
        const entries = Object.entries(book);
        for (let index = 0; index < entries.length; index += 1) {
            const [property, value] = entries[index];
            if (!value) {
                return [false, property];
            }
        }
        return [true, null];
    }
    validatetionBook(book) {
        let [valid, property] = this.validatePropertites(book);
        if (!valid) {
            return `O campo ${property} é obrigatório.`;
        }
        [valid, property] = this.validateValues(book);
        if (!valid) {
            return `O campo ${property} não pode ser nulo ou vazio.`;
        }
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.model.getAll();
            return book;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.model.getById(id);
            return book;
        });
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const isValidBook = this.validatetionBook(book);
            if (typeof isValidBook === 'string') {
                throw new restify_errors_1.BadRequestError(isValidBook);
            }
            return this.model.create(book);
        });
    }
    update(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const isValidBook = this.validatetionBook(book);
            if (typeof isValidBook === 'string') {
                throw new restify_errors_1.BadRequestError(isValidBook);
            }
            const bookFound = yield this.model.getById(id);
            if (!bookFound) {
                throw new restify_errors_1.NotFoundError('Book not found!');
            }
            return this.model.update(id, book);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookFound = yield this.getById(id);
            if (!bookFound) {
                throw new restify_errors_1.NotFoundError("Book not found!");
            }
            return this.model.remove(id);
        });
    }
}
exports.default = BookService;
