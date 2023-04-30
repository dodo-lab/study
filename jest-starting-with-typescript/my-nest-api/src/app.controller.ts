import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 'api'のルートパスにマッピングされるコントローラー
@Controller('api')
export class AppController {
  // 'hello'パスにマッピングされるGETメソッド
  @Get('hello')
  getHello(): string {
    // 'Hello from NestJS API!'を返す
    return 'Hello from NestJS API!';
  }
}
