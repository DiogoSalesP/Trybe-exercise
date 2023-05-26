import { Pool, ResultSetHeader } from "mysql2/promise";
import connection from "../utils/connection";
import { IUser } from "../interfaces/IUser";

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IUser[]> {
    const query = 'SELECT * FROM express.users';
    const [users] = await connection.execute(query);

    return users as IUser[];
  }

  async getById(id: number): Promise<IUser | null> {
    const value = id;
    const query = 'SELETC * FROM users WHERE id=?';
    const [data] = await connection.execute(query, value);
    const [user] = data as IUser[];

    return user || null;
  }

  async getByEmail(email: string): Promise<IUser | null> {
    const value = email;
    const query = 'SELETC * FROM users WHERE email = ?';
    const [data] = await connection.execute(query, value);
    const [user] = data as IUser[];

    return user || null;
  }

  async create(user: IUser): Promise<IUser> {
    const { nome, email, senha } = user;
    const query = 'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)';
    const [result] = await connection.execute<ResultSetHeader>(query, [nome, email, senha]);
    const { insertId: id } = result;
    const newUser: IUser = { id, nome, email, senha };

    return newUser;
  }

  async update(id: number, user: IUser): Promise<IUser> {
    const { nome, email, senha } = user;
    const values = [nome, email, senha, id];
    const query = 'UPDATE users SET name = ?, email = ?, senha = ? WHERE id = ?';
    await connection.execute<ResultSetHeader>(query, values);
    const editedUser: IUser = { id, nome, email, senha};

    return editedUser;
    
  }

  async remove(id: number): Promise<IUser | null> {
    const userToBeDeleted = await this.getById(Number(id));
    if (!userToBeDeleted) return null;
    const values = [id]
    const query = 'DELETE FROM users WHERE id = ?';
    await connection.execute(query, values);

    return userToBeDeleted;
  }
}
