import { ApiProperty } from '@nestjs/swagger'

export class RoleDto {
  @ApiProperty({ example: 'USER' })
  code: string
}
