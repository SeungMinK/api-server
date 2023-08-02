import { Injectable } from '@nestjs/common'
import { CreateUserRequestDto } from '../../dto/create-user-request.dto'
import { CreateUserResponseDto } from '../../dto/create-user-response.dto'
import { FindUsersResponseDto } from '../../dto/find-users-response.dto'
import { FindOneUserResponseDto } from '../../dto/find-one-user-response.dto'
import { UpdateUserResponseDto } from '../../dto/update-user-response.dto'
import { RemoveUserResponseDto } from '../../dto/remove-user-response.dto'
import { UpdateUserRequestDto } from '../../dto/update-user-request.dto'

@Injectable()
export class UsersService {
  async createUser(request: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    return 'This action adds a new user'
  }

  async findUsers(): Promise<FindUsersResponseDto> {
    return `This action returns all users`
  }

  async findOneUser(id: number): Promise<FindOneUserResponseDto> {
    return `This action returns a #${id} user`
  }

  async updateUser(id: number, request: UpdateUserRequestDto): Promise<UpdateUserResponseDto> {
    return `This action updates a #${id} user`
  }

  async removeUser(id: number): Promise<RemoveUserResponseDto> {
    return `This action removes a #${id} user`
  }
}
