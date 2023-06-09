import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { BadRequestInterceptor } from './common/errors/interceptors/badRequest.interceptor'
import { ConflictInterceptor } from './common/errors/interceptors/conflict.interceptor'
import { DatabaseInterceptor } from './common/errors/interceptors/database.interceptor'
import { NotFoundInterceptor } from './common/errors/interceptors/notfound.interceptor'
import { UnauthorizedInterceptor } from './common/errors/interceptors/unauthorized.interceptor'
import { PORT } from './config/constants'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Wallet')
    .setDescription('The Wallet API description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  app.useGlobalInterceptors(new ConflictInterceptor())
  app.useGlobalInterceptors(new DatabaseInterceptor())
  app.useGlobalInterceptors(new UnauthorizedInterceptor())
  app.useGlobalInterceptors(new NotFoundInterceptor())
  app.useGlobalInterceptors(new BadRequestInterceptor())
  await app.listen(PORT)
}
bootstrap()
