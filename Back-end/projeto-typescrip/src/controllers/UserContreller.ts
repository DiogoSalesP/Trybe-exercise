import { IUser } from "../interfaces/IUser";
import UserService from "../services/UserService";
import { Request, Response } from "express";

export default class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.login = this.login.bind(this);
  }

  async getAll(_req: Request, res: Response) {
    const { status, data } = await this.userService.getAll();
    res.status(status).json(data);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data, error } = await this.userService.getById(Number(id));
    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }

  async create(req: Request, res: Response) {
    const user = req.body as IUser;
    const { status, data, error } = await this.userService.create(user);
    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const user = req.body as IUser;
    const { status, data, error } = await this.userService.update(Number(id), user);
    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data, error } = await this.userService.remove(Number(id));
    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }

  async login(req: Request, res: Response) {
    const userCredentials = req.body as IUser;
    const { status, data, error } = await this.userService.login(userCredentials);
    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }

}