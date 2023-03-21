import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common'
import { catchError, Observable } from 'rxjs'
import { BadRequest } from '../types/BadRequest'

@Injectable()
export class BadRequestInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        if (error instanceof BadRequest) {
          throw new BadRequestException(error.message)
        } else {
          throw error
        }
      }),
    )
  }
}
