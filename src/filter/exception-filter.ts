import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import ValidationException from 'src/ex/exception';

@Catch()
export class MyExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    
    let message;
     if (exception instanceof ValidationException) {
      var ex = exception as ValidationException;
      message = "s";
     }
     else {
       message = exception.message;
     }
    
    response
      .status(500)
      .json({
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: request.url,
        message : message
      });
  }
}

