import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class myMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('my middleware running...');
    next();
  }
}
