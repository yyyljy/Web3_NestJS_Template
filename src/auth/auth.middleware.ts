import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers['authorization'];
    if (!authorization) {
      return res.status(401).send('Authorization header is missing');
    }
    try {
      const verify = this.jwtService.verify(authorization);
      console.log(verify);
    } catch (error) {
      if (error.message === 'jwt expired') {
        return res.status(401).send('Unauthorized');
      }
    }

    next();
  }
}
