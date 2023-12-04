import { RoleDto } from './role.dto'
import { ProviderDto } from './provider.dto'
import { ApiProperty } from '@nestjs/swagger'

export class UserDto {
  @ApiProperty({ example: 1 })
  id: number
  @ApiProperty({ example: 'testUser1' })
  username: string
  @ApiProperty({ example: 'a@sd%78#^276!~' })
  password: string
  @ApiProperty({ example: 'testUser1@gmail.com' })
  email: string
  @ApiProperty({ example: 0 })
  verified: boolean

  @ApiProperty({ example: '2023-12-04 09:00:00' })
  createdAt: Date

  @ApiProperty({ example: '2023-12-04 09:00:00' })
  updatedAt: Date

  @ApiProperty({ type: RoleDto })
  role: RoleDto[]
  @ApiProperty({ type: ProviderDto })
  provider: ProviderDto
}
