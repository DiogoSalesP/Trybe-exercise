import connection from "../models/connection";
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';
import { BadRequestError, NotFoundError } from "restify-errors";

class BookService {
  model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  validatePropertites(book: Book): [boolean, string | null ] {
    const properties = [ 'title', 'price', 'author', 'isbn' ];

    for (let index = 0; index < properties.length; index += 1) {
      if (!Object.prototype.hasOwnProperty.call(book, properties[index])) {
        return [false, properties[index]]
      }
    }
    return [true, null]
  }

  validateValues(book: Book): [boolean, string | null] {
    const entries = Object.entries(book);
    for (let index = 0; index < entries.length; index += 1) {
      const [property, value] = entries[index];
      if (!value) {
        return [false, property]
      }
    }
    return [true, null];
  }

  validatetionBook(book: Book): void | string {
    let [valid, property] = this.validatePropertites(book);
    if (!valid) {
      return `O campo ${property} é obrigatório.`;
    }
    [valid, property] = this.validateValues(book);

    if (!valid) {
      return `O campo ${property} não pode ser nulo ou vazio.`;
    }
  }

  async getAll(): Promise<Book[]> {
    const book = await this.model.getAll();
    return book;
  }

  async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id)
    return book;
  }

  async create(book: Book): Promise<Book> {
    const isValidBook = this.validatetionBook(book);
    if (typeof isValidBook === 'string') {
      throw new BadRequestError(isValidBook);
    }
    return this.model.create(book);
  }

  async update(id: number, book: Book): Promise<void> {
    const isValidBook = this.validatetionBook(book);
    if (typeof isValidBook === 'string') {
      throw new BadRequestError(isValidBook);
    }
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('Book not found!');
    }
    return this.model.update(id, book)
  }

  async remove(id: number): Promise<void> {
    const bookFound = await this.getById(id);
    if (!bookFound) {
      throw new NotFoundError("Book not found!");
    }
    return this.model.remove(id);
  }
}



export default BookService;
