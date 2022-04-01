import { ExceptionFilter, Catch, ArgumentsHost, HttpException, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class MyExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    
    console.info("gelik"+exception.stack);
    response
      .status(status)
      .json({
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: request.url,
        message : exception.message
      });
  }
}