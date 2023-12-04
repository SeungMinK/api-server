import { ApiProperty } from '@nestjs/swagger'

export class ProviderDto {
  @ApiProperty({ example: 'GOOGLE' })
  code: string
}
