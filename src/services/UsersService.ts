import { User } from '../entities/User';
import { getCustomRepository, Repository } from "typeorm";
import { UsersRepository } from '../repositories/UsersRepository';


class UserService {
  private usersRepository: Repository<User>

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async store(email: string){
    const userExists = await this.usersRepository.findOne({
      email
    })

    if(userExists){
      return userExists;
    }

    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UserService }