import connection from '../utils/connection';
import UserModel from '../models/UserModel'
import { IUser } from '../interfaces/IUser';
import { validateUser } from '../validations/userValidation';

export default class UserService {
  UserModel: UserModel;

  constructor() {
    this.UserModel = new UserModel(connection)
  }

  async getAll() {
    const data = await this.UserModel.getAll();
    return { status: 200, data }
  }

  async getById(id: number) {
    const data = await this.UserModel.getById(id);
    if (!data) return { status: 404, error: { message: 'Pessoa não encontrada' } };
    return { status: 200, data }
  }

  async create(user: IUser) {
    validateUser(user);
    const userExists = await this.UserModel.getByEmail(user.email);
    if (userExists) return { status: 400, error: { message: 'Pessoa já cadastrada' } };
    const data = await this.UserModel.create(user);
    return { status: 200, data }
  }

  async update(id: number, user: IUser) {
    const userExists = await this.UserModel.getById(id);
    if (!userExists) return { status: 404, error: { message: 'Pessoa não encontrada'} };
    const data = await this.UserModel.update(id, user);
    if (data == null) return { status: 404, error: { message: 'Atualização com algum problema' } };
    return { status: 200, data };
  }

  async remove(id: number) {
    const data = await this.UserModel.remove(id);
    if (data === null) return { status: 404, error: { message: 'Pessoa não encontrada' } };
    return { status: 200, data };
  }

  async login(userCredentials: IUser) {
    const data = await this.UserModel.getByEmail(userCredentials.email)

    if (data === null || data.senha !== userCredentials.senha) {
      return { status: 403, error: { message: 'Não autorizado'} };
    }
    return { status: 200, data: { token: 'fake token' } };
  }
}
