import { RoleDto } from './role.dto'
import { ProviderDto } from './provider.dto'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserRequestDto {
  @ApiProperty({ example: 'testUser1' })
  username: string

  @ApiProperty({ example: 'asdqwe123!' })
  password: string

  @ApiProperty({ example: 'testUser1@gmail.com' })
  email: string

  @ApiProperty({ type: ProviderDto })
  provider: ProviderDto

  @ApiProperty({ type: RoleDto })
  role: RoleDto
}
