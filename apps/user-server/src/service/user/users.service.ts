import { Injectable } from '@nestjs/common'
import { CreateUserRequestDto } from '../../dto/create-user-request.dto'
import { CreateUserResponseDto } from '../../dto/create-user-response.dto'
import { FindUsersResponseDto } from '../../dto/find-users-response.dto'
import { FindOneUserResponseDto } from '../../dto/find-one-user-response.dto'
import { UpdateUserResponseDto } from '../../dto/update-user-response.dto'
import { RemoveUserResponseDto } from '../../dto/remove-user-response.dto'
import { UpdateUserRequestDto } from '../../dto/update-user-request.dto'
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm'
import { DataSource, Repository } from 'typeorm'
import { UserEntity } from '../../entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectDataSource() private connection: DataSource,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(request: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    const creatableUserEntity = await this.userRepository.create(request)

    const createdUserEntity = await this.userRepository.save(creatableUserEntity)

    return createdUserEntity
  }

  async findUsers(): Promise<FindUsersResponseDto> {
    const existUserEntity = await this.userRepository.find()
    if (!existUserEntity) {
      /**Not Found Error*/
      return
    }

    return existUserEntity
  }

  async findOneUser(id: number): Promise<FindOneUserResponseDto> {
    const existUsersEntity = await this.userRepository.findOne({ where: { id: id } })
    if (!existUsersEntity) {
      /**Not Found Error*/
      return
    }

    return existUsersEntity
  }

  async updateUser(id: number, request: UpdateUserRequestDto): Promise<UpdateUserResponseDto> {
    const existUsersEntity = await this.userRepository.findOne({ where: { id: id } })
    if (!existUsersEntity) {
      /**Not Found Error*/
      return
    }

    const updatableUserEntity = this.userRepository.merge(existUsersEntity, this.userRepository.create(request))

    const updatedUserEntity = await this.userRepository.save(updatableUserEntity)

    return updatedUserEntity
  }

  async removeUser(id: number): Promise<RemoveUserResponseDto> {
    const existUsersEntity = await this.userRepository.findOne({ where: { id: id } })
    if (!existUsersEntity) {
      /**Not Found Error*/
      return
    }

    const removedUserEntity = await this.userRepository.softRemove(existUsersEntity)

    return removedUserEntity
  }
}
