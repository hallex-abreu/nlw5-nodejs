import { Request, Response } from 'express';
import { UserService } from '../services/UsersService';

class UsersController {
  async store(request: Request, response:Response): Promise<Response>{
    const { email } = request.body;

    const usersService = new UserService();

    const user = await usersService.store(email)

    return response.json(user)
  }
}

export { UsersController }