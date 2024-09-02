import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as bodyParser from 'body-parser';
import { HttpException, HttpStatus } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // cors
  app.enableCors(configService.get('server.corsOption'));

  // request size limit
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

  // exception
  app.useGlobalFilters(
    new (class {
      catch(exception: any, host: any) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status =
          exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        response.status(status).json({
          statusCode: status,
          message: exception.message,
        });
      }
    })(),
  );
  await app.listen(configService.get('PORT'));
}
bootstrap();
