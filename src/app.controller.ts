import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

@Controller('/')
@ApiTags('Health-Check')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({ description: 'The found record' })
  @Get()
  check(): string {
    return this.appService.check()
  }
}
