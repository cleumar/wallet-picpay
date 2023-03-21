import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  async check() {
    return { message: 'health-check: ok :) ' }
  }
}
